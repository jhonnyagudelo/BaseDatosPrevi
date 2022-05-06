import Sesion from '../models/Sesion';
import Usuario from '../models/Usuario';

export const getSesiones = async (req, res) => {
  try {
    const sesiones = await Sesion.findAll({
      include: [{ model: Usuario }],
    });
    if (!sesiones.length > 0)
      return res.status(404).json({ message: 'Sesion dont exists', data: [] });

    res.json({
      message: 'Sesion find successfully',
      data: sesiones,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};

export const getSesionById = async (req, res) => {
  try {
    const { id } = req.params;
    const sesion = await Sesion.findOne({
      include: [{ model: Usuario }],
      where: { id },
    });
    if (!sesion)
      return res.status(404).json({ message: 'Sesion dont exists', data: {} });

    res.json({
      message: 'Sesion find successfully',
      data: sesion,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};

export const createSesion = async (req, res) => {
  try {
    const { usuario_id } = req.body;
    const newSesion = await Sesion.create(
      { usuario_id },
      { fields: ['usuario_id'] }
    );
    if (!newSesion)
      return res
        .status(404)
        .json({ message: 'Sesiones dont created', data: {} });

    res.json({ message: 'Sesiones created successfully', data: newSesion });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateSesionById = async (req, res) => {
  try {
    const { id } = req.params;
    const { usuario_id } = req.body;
    const updateSesion = await Sesion.findOne({ where: { id } });
    if (!updateSesion)
      return res.status(404).json({ message: 'Sesion dont exists' });

    await updateSesion.update({ usuario_id }, { where: { id } });
    res.json({ message: 'Sesion created successfully', data: updateSesion });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteSesionesById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSesion = await Sesion.findOne({ where: { id } });
    if (!deleteSesion)
      return res.status(404).json({ message: 'Sesion dont exist', data: {} });

    await deleteSesion.destroy();
    res.json({ message: 'Sesion deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

