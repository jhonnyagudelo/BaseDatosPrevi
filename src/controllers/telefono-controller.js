import Telefono from '../models/Telefono';

export const getTelefono = async (req, res) => {
  try {
    const telefono = await Telefono.findAll();
    if (!telefono.length > 0)
      return res
        .status(404)
        .json({ message: 'Telefonos dont exists', data: [] });

    return res.json({
      message: 'Telefonos encontrados',
      data: telefono,
    });
  } catch (e) {
    res.status(500).json({
      message: 'lo siento no se encontro',
      data: [],
      err: e,
    });
  }
};

export const getTelefonoById = async (req, res) => {
  try {
    const { id } = req.params;
    const telefono = await Telefono.findOne({ where: { id } });
    return res.json({
      message: 'Telefono de la persona encontrada',
      data: telefono,
    });
  } catch (e) {
    res.status(500).json({
      message: 'lo sentimo no encontramos el telefono',
      data: {},
      err: e,
    });
  }
};

export const createTelefono = async (req, res) => {
  try {
    const {
      detalle_usuario_id,
      referencia_familiar_id,
      cliente_id,
      tipo_telefono,
      numero,
    } = req.body;
    const newTelefono = await Telefono.create(
      {
        detalle_usuario_id,
        referencia_familiar_id,
        cliente_id,
        tipo_telefono,
        numero,
      },
      {
        fields: [
          'detalle_usuario_id',
          'referencia_familiar_id',
          'cliente_id',
          'tipo_telefono',
          'numero',
        ],
      }
    );
    if (!newTelefono)
      return res
        .status(400)
        .json({ message: 'Telefono dont created', data: {} });

    res.json({
      message: 'Telefono creado',
      data: newTelefono,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se pudo guardar',
      data: {},
      err: e,
    });
  }
};

export const updateTelefonoById = async (req, res) => {
  try {
    const { id } = req.params;
    const { tipo_telefono, numero } = req.body;
    const updateTelefono = await Telefono.findOne({ where: { id } });
    if (!updateTelefono)
      return res.status(404).json({ message: 'Telefono no existe', data: {} });

    await updateTelefono.update(
      {
        tipo_telefono,
        numero,
        estado,
      },
      {
        where: { id },
      }
    );
    res.json({
      message: 'Telefono actualizado',
      data: updateTelefono,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se actualiza el telefono',
      data: {},
      err: e,
    });
  }
};

export const deleteTelefonoById = async (req, res) => {
  try {
    const { id } = req.params;
    const telefono = await Telefono.findOne({ where: { id } });
    if (!telefono)
      return res
        .status(404)
        .json({ message: 'Telefono no encontrado', data: {} });

    await Telefono.destroy({ where: { id } });
    res.json({
      message: 'Telefono eliminado satisfactoriamente',
      data: telefono,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos Telefono no se elimino',
      data: {},
      err: e,
    });
  }
};
