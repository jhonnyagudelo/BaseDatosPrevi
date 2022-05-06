import { keys } from '../config';
import jwt from 'jsonwebtoken';
import DetalleUsuario from '../models/DetalleUsuario';
import Rol from '../models/Rol';
import { Op } from 'sequelize';
import { Authority } from './authority-constants';

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];

    // if not exists token
    if (!token) return res.status(403).json({ message: 'No token provided' });
    // verify token validate
    const decode = jwt.verify(token, keys.publicKey);
    // assign usuarioId of decode.id
    req.usuarioId = decode.id;
    // find usuario by id
    const detalleUsuario = await DetalleUsuario.findOne({ where: { usuario_id: req.usuarioId } });
    // if not exists usuario
    if (!detalleUsuario)
      return res.status(404).json({ message: 'DetalleUsuario dont exists' });
    // call next function
    next();
  } catch (e) {
    res.status(401).json({
      message: 'Unauthorized'
    });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    // find usuario by id
    const detalleUsuario = await DetalleUsuario.findOne({ where: { usuario_id: req.usuarioId } });
    // if not exist usuario
    if (!detalleUsuario)
      return res.status(404).json({ message: 'DetalleUsuario not found' });
    // find all roles by id
    const roles = await Rol.findAll({
      where: {
        id: {
          [Op.in]: await detalleUsuario
            .getRols()
            .then((role) => role.map((d) => d.id)),
        },
      },
    });
    // find role require

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].nombre === Authority.ADMIN) {
        next();
        return;
      }
    }
    // if dont have rol require
    return res.status(403).json({ message: 'Require rol Admin' });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', err: e });
  }
};

export const isGestor = async (req, res, next) => {
  try {
    const detalleUsuario = await DetalleUsuario.findOne({
      where: { usuario_id: req.usuarioId },
    });
    if (!detalleUsuario)
      return res.status(404).json({
        message: 'detalleUsuario not found',
      });
    const roles = await Rol.findAll({
      where: {
        id: {
          [Op.in]: await detalleUsuario
            .getRols()
            .then((role) => role.map((d) => d.id)),
        },
      },
    });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].nombre === Authority.GESTOR) {
        next();
        return;
      }
    }
    return res.status(404).json({
      message: 'Require rol gestor',
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento',
      err: e,
    });
  }
};

export const isFinanza = async (req, res, next) => {
  try {
    const detalleUsuario = await DetalleUsuario.findOne({
      where: { usuario_id: req.usuarioId },
    });
    if (!detalleUsuario)
      return res.status(404).json({
        message: 'detalleUsuario not found',
      });
    const roles = await Rol.findAll({
      where: {
        id: {
          [Op.in]: await detalleUsuario
            .getRols()
            .then((role) => role.map((d) => d.id)),
        },
      },
    });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].nombre === Authority.FINANZAS) {
        next();
        return;
      }
    }
    return res.status(404).json({
      message: 'Require rol finanza',
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento',
      err: e,
    });
  }
};
