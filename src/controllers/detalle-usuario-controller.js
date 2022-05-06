import DetalleUsuario from '../models/DetalleUsuario';
import { sequelize } from '../database/database';
import { Op } from 'sequelize';
import Usuario from '../models/Usuario';
import Sede from '../models/Sede';
import Telefono from '../models/Telefono';
import RolUsuario from '../models/RolUsuario';
import Rol from '../models/Rol';

export const getDetalleUsuarios = async (req, res) => {
  try {
    const detalleUsuarios = await DetalleUsuario.findAll({
      include: [{ model: Usuario }, { model: Sede }, { model: Telefono }],
    });
    if (detalleUsuarios.length > 0) {
      return res.json({
        message: 'Detalle usuarios find successfully',
        data: detalleUsuarios,
      });
    }

    res.json({
      message: 'Detalle usuario dont exists',
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};

export const getDetalleUsuarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const detalleUsuario = await DetalleUsuario.findOne({
      include: [{ model: Usuario }, { model: Sede }, { model: Telefono }],
      where: { id },
    });
    return res.json({
      message: 'Detalle usuario encontrado',
      data: detalleUsuario,
    });
  } catch (e) {
    res.status(500).json({
      message: 'lo siento no se encontro',
      data: {},
      err: e,
    });
  }
};

export const detalle_usuarioByUsuario_id = async (req, res) => {
  try {
    const { usuarioId } = req.params;
    const detalleUsuarioByUserId = await DetalleUsuario.findOne({
      include: [
        { model: Usuario },
        { model: Sede },
        { model: Rol },
        { model: Telefono },
      ],
      where: { usuario_id: { [Op.eq]: usuarioId } },
    });
    if (!detalleUsuarioByUserId)
      return res.status(404).json({
        message: 'El detalle no se encontro',
        data: {},
      });
    return res.json({
      message: 'Detalle usuario by user id encontrado',
      data: detalleUsuarioByUserId,
    });
  } catch (e) {
    /* handle error */
    res.status(500).json({
      message: 'lo siento no se encontro',
      data: {},
      err: e,
    });
  }
};

//export const createByUsuarioByDetalle = async (req, res) => {
//const t = await sequelize.transaction();

//try {
//const { usuario, detalle_usuario, telefonos, rol } = req.body;
//const { username, password } = usuario;
//const {
//sede_id,
//u_codigo,
//primer_nombre,
//segundo_nombre,
//primer_apellido,
//segundo_apellido,
//n_documento,
//direccion,
//rh,
//tipo_documento,
//estado_civil,
//genero,
//correo,
//} = detalle_usuario;

//const { detalle_usuario_id, tipo_telefono, numero } = telefonos;

//const { rol_id, descripcion } = rol;

//const newUsuario = await Usuario.create(
//{ username, password },
//{ transaction: t },
//{ fields: ['username', 'password'] }
//);
//const detalle = await DetalleUsuario.create(
//{
//usuario_id: newUsuario?.id,
//...detalle_usuario,
//},
//{ transaction: t },
//{
//fields: [
//'sede_id',
//'usuario_id',
//'u_codigo',
//'primer_nombre',
//'segundo_nombre',
//'primer_apellido',
//'segundo_apellido',
//'n_documento',
//'direccion',
//'rh',
//'tipo_documento',
//'estado_civil',
//'genero',
//'correo',
//],
//}
//);
//const telefono = await Telefono.create(
//{
//detalle_usuario_id: detalle?.id,
//tipo_telefono,
//numero,
//},
//{ transaction: t },
//{
//fields: ['detalle_usuario_id', 'tipo_telefono', 'numero'],
//}
//);
//newUsuario.addRol(await Rol.findOne({ where: { id: rol_id } }));
////await RolUsuario.create(
////{
////usuario_id: newUsuario?.id,
////rol_id,
////descripcion,
////},
////{ transaction: t },
////{
////fields: ['usuario_id', 'rol_id', 'descripcion'],
////}
////)
////.then()
////.catch((error) => console.log(error));
////const h = await Rol.findOne({ where: { id: rol_id } });
//await t.commit();
//res.json({
//message: 'Los detalles del usuario han sido creados',
//data: { usuario, detalle, telefonos, rol },
//});
//} catch (error) {
//if (t) {
//await t.rollback();
//}
//res.status(500).json({
//message: 'Lo siento no se pudo crear los detalles',
//data: {},
//err: error,
//});
//}
//};

export const createDetalleUsuario = async (req, res) => {
  try {
    const {
      sede_id,
      usuario_id,
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
    const newDetalleUsuario = await DetalleUsuario.create(
      {
        sede_id,
        usuario_id,
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
      },
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
    return res.json({
      message: 'Los detalles del usuario han sido creados',
      data: newDetalleUsuario,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento no se pudo crear los detalles',
      data: {},
      err: e,
    });
  }
};

export const updateDetalleUsuarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      sede_id,
      usuario_id,
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
      estado,
    } = req.body;
    const detalleUsuario = await DetalleUsuario.findAll({
      where: { id },
    });
    if (detalleUsuario.length > 0) {
      detalleUsuario.forEach(async (i) => {
        await i.update({
          sede_id,
          usuario_id,
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
          estado,
        });
      });
      return res.json({
        message: 'Los detalles del usuario han sido actualizados',
        data: detalleUsuario,
      });
    } else {
      return res.status(404).json({ message: 'El usuario no existe' });
    }
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento no se pudo actualizar',
      data: {},
      err: e,
    });
  }
};

export const deleteDetalleUsuarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const detalleUsuario = await DetalleUsuario.findOne({
      where: { id },
    });
    if (detalleUsuario) {
      await DetalleUsuario.destroy({
        where: { id },
      });
      res.json({
        message: 'Detalle eliminado',
      });
    } else {
      res.status(404).json({
        message: 'No existe',
      });
    }
  } catch (e) {
    res.json({
      message: 'Lo siento no se pudo eliminar',
      data: {},
      err: e,
    });
  }
};
