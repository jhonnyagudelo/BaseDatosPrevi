import Usuario, { encryptPassword } from '../models/Usuario';
import { sequelize } from '../database/database';
import Telefono from '../models/Telefono';
import Rol from '../models/Rol';
import DetalleUsuario from '../models/DetalleUsuario';
import RolUsuario from '../models/RolUsuario';
import PerfilUsuario from '../models/PerfilUsuario';

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      include: [{ model: Rol, attributes: ['nombre'] }],
      order: [['created_at', 'desc']],
    });
    if (!usuarios.length > 0)
      return res
        .status(404)
        .json({ message: 'Usuarios dont exists', data: [] });

    return res.json({
      message: 'Usuarios find successfully',
      data: usuarios,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong1',
      data: {},
      err: e,
    });
  }
};

export const getUsuarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findOne({
      where: { id },
      order: [['created_at', 'desc']],
    });
    return res.json({
      message: 'Usuario encontrado',
      data: usuario,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};

export const createByUsuarioByDetalle = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { usuario, detalle_usuario, telefonos, rol, perfil } = req.body;
    const { username, password } = usuario;
    const { usuario_id, perfil_id } = perfil;
    const {
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
    } = detalle_usuario;

    const { detalle_usuario_id, tipo_telefono, numero } = telefonos;

    const { rol_id, descripcion } = rol;
    const newUsuario = await Usuario.create(
      { username, password: await encryptPassword(password) },
      { transaction: t },
      { fields: ['username', 'password'] }
    );

    const detalle = await DetalleUsuario.create(
      {
        usuario_id: newUsuario?.id,
        ...detalle_usuario,
      },
      { transaction: t },
      {
        fields: [
          'sede_id',
          'usuario_id',
          'u_codigo',
          'primer_nombre',
          'segundo_nombre',
          'primer_apellido',
          'segundo_apellido',
          'n_documento',
          'direccion',
          'rh',
          'tipo_documento',
          'estado_civil',
          'genero',
          'correo',
        ],
      }
    );

    const newPerfil = await PerfilUsuario.create(
      {
        usuario_id: newUsuario?.id,
        perfil_id,
      },
      { transaction: t },
      {
        fields: ['usuario_id', 'perfil_id'],
      }
    );

    telefonos.forEach((element) => {
      element.detalle_usuario_id = detalle?.id;
    });

    await Telefono.bulkCreate(
      telefonos,
      { transaction: t },
      {
        fields: ['detalle_usuario_id', 'tipo_telefono', 'numero'],
      }
    );

    rol.forEach((item) => {
      item.usuario_id = newUsuario?.id;
    });
    await RolUsuario.bulkCreate(
      rol,
      { transaction: t },
      {
        fields: ['usuario_id', 'rol_id', 'descripcion'],
      }
    );

    await t.commit();
    res.json({
      message: 'el usuario han sido creados',
      data: { usuario, detalle, telefonos, rol, perfil },
    });
  } catch (error) {
    if (t) {
      await t.rollback();
    }
    res.status(500).json({
      message: 'Lo siento no se pudo crear el usuario',
      data: {},
      err: error,
    });
  }
};

export const createUsuario = async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUsuario = await Usuario.create(
      {
        username,
        password: await encryptPassword(password),
      },
      {
        fields: ['username', 'password'],
      }
    );
    if (!newUsuario)
      return res.status(404).json({ message: 'Usuario dont exists', data: {} });

    res.json({
      message: 'Usuario creado satisfactoriamente',
      data: newUsuario,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};

export const updateUsuarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password } = req.body;
    const updateUsuario = await Usuario.findOne({ where: { id } });
    if (!updateUsuario)
      return res
        .status(404)
        .json({ message: 'Usuario dont created', data: {} });

    await updateUsuario.update(
      {
        username,
        password: await encryptPassword(password),
      },
      { where: { id } }
    );
    res.json({ message: 'Usuario updated successfully', data: updateUsuario });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteUsuarioById = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteUsuario = await Usuario.findOne({ where: { id } });
    if (!deleteUsuario)
      return res.status(404).json({ message: 'Usuario dont exists', data: {} });

    await deleteUsuario.destroy();
    res.json({
      message: 'Usuario deleted successfully',
      data: {},
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};
