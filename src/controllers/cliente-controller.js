import Cliente from '../models/Cliente';
import SeguridadSocial from '../models/SeguridadSocial';
import Barrio from '../models/Barrio';
import Telefono from '../models/Telefono';
import { sequelize } from '../database/database';
export const getCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findAll({
      include: [
        {
          model: SeguridadSocial,
          atributes: [],
        },
        {
          model: Barrio,
        },
        { model: Telefono },
      ],
      order: [['created_at', 'desc']],
    });
    if (!cliente.length > 0)
      return res.status(404).json({
        message: 'Cliente no existe',
        data: {},
      });
    return res.json({
      message: 'Clientes encontrador',
      data: cliente,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento no se encontro',
      data: {},
      err: e,
    });
  }
};

export const getClienteById = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findOne({
      where: { id },
      include: [
        {
          model: SeguridadSocial,
          atributes: [],
        },

        { model: Barrio },
        { model: Telefono },
      ],
      order: [['created_at', 'desc']],
    });
    return res.json({
      message: 'El cliente fue encontrado',
      data: cliente,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no encontramos resultados',
      data: {},
      err: e,
    });
  }
};

export const getClienteDocumento = async (req, res) => {
  try {
    const { n_documento } = req.params;
    const cliente = await Cliente.findOne({
      where: { n_documento },
      include: [
        {
          model: SeguridadSocial,
          atributes: [],
        },

        { model: Barrio },
        { model: Telefono },
      ],
      order: [['created_at', 'desc']],
    });
    if (!cliente)
      return res.status(404).json({
        message: 'el cliente no existe',
        data: {},
      });
    return res.json({
      message: 'El cliente fue encontrado',
      data: cliente,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no encontramos resultados',
      data: {},
      err: e,
    });
  }
};

/*CREACION DE CLIENTE CON NUMERO TELEFONICO*/
export const createByClienteAndTelefono = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const { cliente, telefonos } = req.body;
    const {
      tipo_documento,
      n_documento,
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      genero,
      correo,
      direccion,
      f_nacimiento,
      tipo_vivienda,
      barrio_id,
      actividad_economica,
      seguro_id,
    } = cliente;

    const { cliente_id, tipo_telefono, numero } = telefonos;
    const newCliente = await Cliente.create(
      {
        ...cliente,
      },
      { transaction: t },
      {
        fields: [
          'tipo_documento',
          'n_documento',
          'primer_nombre',
          'segundo_nombre',
          'primer_apellido',
          'segundo_apellido',
          'genero',
          'correo',
          'direccion',
          'f_nacimiento',
          'tipo_documento',
          'barrio_id',
          'actividad_economica',
          'seguro_id',
          'usuario_id',
        ],
      }
    );
    telefonos.forEach((element) => {
      element.cliente_id = newCliente?.id;
    });

    await Telefono.bulkCreate(
      telefonos,
      { transaction: t },
      {
        fields: ['cliente_id', 'tipo_telefono', 'numero'],
      }
    );
    await t.commit();
    res.json({
      message: 'El cliente se creo correctamente',
      data: { cliente, telefonos },
    });
  } catch (e) {
    if (t) {
      await t.rollback();
    }
    res.status(500).json({
      message: 'Lo siento no se pudo crear el cliente',
      data: {},
      err: e,
    });
  }
};

export const createCliente = async (req, res) => {
  try {
    const {
      tipo_documento,
      n_documento,
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      genero,
      correo,
      direccion,
      f_nacimiento,
      tipo_vivienda,
      barrio_id,
      actividad_economica,
      seguro_id,
    } = req.body;
    const newCliente = await Cliente.create(
      {
        tipo_documento,
        n_documento,
        primer_nombre,
        segundo_nombre,
        primer_apellido,
        segundo_apellido,
        genero,
        correo,
        direccion,
        f_nacimiento,
        tipo_vivienda,
        barrio_id,
        actividad_economica,
        seguro_id,
      },
      {
        fields: [
          'tipo_documento',
          'n_documento',
          'primer_nombre',
          'segundo_nombre',
          'primer_apellido',
          'segundo_apellido',
          'genero',
          'correo',
          'direccion',
          'f_nacimiento',
          'tipo_vivienda',
          'barrio_id',
          'actividad_economica',
          'seguro_id',
        ],
      }
    );
    res.json({
      message: 'El cliente fue creado',
      data: newCliente,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se creo el cliente',
      data: {},
      err: e,
    });
  }
};

export const updateCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      tipo_documento,
      n_documento,
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      genero,
      correo,
      direccion,
      f_nacimiento,
      tipo_vivienda,
      barrio_id,
      actividad_economica,
      seguro_id,
      estado,
    } = req.body;
    const cliente = await Cliente.findOne({ where: { id } });
    if (!cliente)
      return res.status(404).json({
        message: 'El cliente no existe',
        data: {},
      });
    await cliente.update(
      {
        tipo_documento,
        n_documento,
        primer_nombre,
        segundo_nombre,
        primer_apellido,
        segundo_apellido,
        genero,
        correo,
        direccion,
        f_nacimiento,
        tipo_vivienda,
        barrio_id,
        actividad_economica,
        seguro_id,
        estado,
      },
      {
        where: { id },
      }
    );
    res.json({
      message: 'Se actualizo el cliente',
      data: cliente,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se actualizo',
      data: {},
      err: e,
    });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findOne({ where: { id } });
    if (cliente) {
      await Cliente.destroy({ where: { id } });
      res.json({
        message: 'Cliente eliminado',
        data: cliente,
      });
    } else {
      res.status(404).json({ message: 'No existe' });
    }
  } catch (e) {
    res.json({
      message: 'Lo sentimos no se pudo eliminar',
      data: {},
      err: e,
    });
  }
};
