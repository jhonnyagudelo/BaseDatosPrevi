import Credencial from '../models/Credencial';

export const getCredencial = async (req, res) => {
  try {
    const credencial = await Credencial.findAll();
    if (!credencial > 0)
      return res.status(404).json({
        message: 'Credencial no existe',
        data: {},
      });
    res.json({
      message: 'Credencial encontrada',
      data: credencial,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const getCredencialById = async (req, res) => {
  try {
    const { id } = req.params;
    const credencial = await Credencial.findOne({ where: { id } });
    if (!credencial)
      return res.status(404).json({
        message: 'La credencial no existe ',
        data: {},
      });
    res.json({
      message: 'La credencial encontrada',
      data: credencial,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const createCredencial = async (req, res) => {
  try {
    const { nombre, descripcion, tiempo } = req.body;
    const newCredencial = await Credencial.create(
      {
        nombre,
        descripcion,
        tiempo,
      },
      {
        fields: ['nombre', 'descripcion', 'tiempo'],
      }
    );
    if (!newCredencial)
      return res.status(404).json({
        message: 'Credencial no creado',
        data: {},
      });
    res.json({
      message: 'Credencial creada',
      data: newCredencial,
    });
  } catch (e) {
    res.status(500).json({
      message: 'lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const updateCredencialById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, tiempo, estado } = req.body;
    const updateCrencial = await Credencial.findOne({ where: { id } });
    if (!updateCrencial)
      return res.status(404).json({
        message: 'Credencial no encontrada',
        data: {},
      });
    await updateCrencial.update(
      { nombre, descripcion, tiempo, estado },
      { where: { id } }
    );
    res.json({
      message: 'Credencial actualizada',
      data: updateCrencial,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const deleteCredencialById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCredencial = await Credencial.findOne({ where: { id } });
    if (!deleteCredencial)
      return res.status(404).json({
        message: 'Credencial no existe',
        data: {},
      });
    await deleteCredencial.destroy();
    res.json({
      message: 'Eliminado correctamente',
      data: deleteCredencial,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};
