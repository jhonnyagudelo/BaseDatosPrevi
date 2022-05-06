import Usuario, { comparePassword, encryptPassword } from '../models/Usuario';
import DetalleUsuario from '../models/DetalleUsuario';
import jwt from 'jsonwebtoken';
import { keys } from '../config';
import { Op } from 'sequelize';
import Rol from '../models/Rol';

export const signUp = async (req, res) => {
  const {
    username,
    password,
    rols,
    sede_id,
    u_codigo,
    primer_nombre,
    segundo_nombre,
    primer_apellido,
    segundo_apellido,
    n_documento,
    direccion,
    rh,
    tipo_documento,
    estado_civil,
    genero,
    correo,
  } = req.body;

  await DetalleUsuario.create(
    {
      sede_id,
      u_codigo,
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      n_documento,
      direccion,
      rh,
      tipo_documento,
      estado_civil,
      genero,
      correo,
      usuario: [
        {
          username,
          password: await encryptPassword(password),
        },
      ],
    },
    { include: [{ model: Usuario }] }
  )
    .then(async (detalleUsuario) => {
      if (rols)
        await rols.forEach((async (role) => {
          const rol = await Rol.findOne({
            where: {
              id: role,
              [Op.not]: [{ nombre: { [Op.iLike]: 'visitor' } }],
            },
          });
          if (rol) {
            await detalleUsuario.addRol(role);
          }
        }));

      if (!rols.length > 0)
        await Rol.findOne({
          where: { nombre: { [Op.iLike]: 'visitor' } },
          attributes: ['id'],
        }).then(async (role) => {
          if (role) await detalleUsuario.addRol(role);
        });

      res.json({
        message: 'Usuario created successfully',
        data: detalleUsuario,
      });
    })
    .catch((e) =>
      res
        .status(500)
        .json({ message: 'Something goes wrong', data: {}, err: e })
    );
};

export const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    await DetalleUsuario.findOne({
      include: [
        {
          model: Usuario,
          where: { username },
        },
      ],
    }).then(async (detalleUsuario) => {
      if (!detalleUsuario.usuario) {
        res.json({ message: 'Usuario dont exists', data: {} });
      } else {
        const matchPassword = await comparePassword(
          password,
          detalleUsuario.usuario.password
        );
        if (!matchPassword)
          return res
            .status(401)
            .json({ token: null, message: 'Invalid password' });
        jwt.sign(
          { id: detalleUsuario.usuario.id },
          keys.publicKey,
          { expiresIn: '120s' },
          async (err, token) => {
            if (err) {
              return res
                .status(500)
                .json({ message: 'Something goes wrong', data: {}, err: err });
            }
            return res.json({
              message: 'Usuario find successfully',
              data: await detalleUsuario
                .getRols()
                .then((role) => role.map((role) => role.id)),
              token,
            });
          }
        );
      }
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

