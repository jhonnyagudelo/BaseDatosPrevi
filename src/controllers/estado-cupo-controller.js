import EstadoCupo from '../models/EstadoCupo';

export const getEstadoCupos = async (req, res) => {
  try {
    const estadoCupos = await EstadoCupo.findAll();
    if (!estadoCupos.length > 0) return res.status(404).json({ message: 'EstadoCupos dont exists' });

    res.json({ message: 'EstadoCupo find successfully', data: estadoCupos });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const getEstadoCupoById = async (req, res) => {
  try {
    const { id } = req.params;
    const estadoCupo = await EstadoCupo.findOne({ where: { id } });
    if (!estadoCupo) return res.status(404).json({ message: 'EstadoCupo dont exists' });

    res.json({ message: 'EstadoCupo find successfully', data: estadoCupo });
  } catch (e) {
    res.status(400).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const createEstadoCupo = async (req, res) => {
  try {
    const { nombre } = req.body;
    const newEstadoCupo = await EstadoCupo.create({ nombre }, { fields: ['nombre'] });
    if (!newEstadoCupo) return res.status(404).json({ messgae: 'EstadoCupo dont created' });

    res.json({ message: 'EstadoCupo created successfully', data: newEstadoCupo });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateEstadoCupoById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    const updateEstadoCupo = await EstadoCupo.findOne({ where: { id } });
    if (!updateEstadoCupo) return res.status(404).json({ message: 'EstadoCupo dont exists' });

    await updateEstadoCupo.update({ nombre }, { where: { id } });
    res.json({ message: 'EstadoCupo updated successfully', data: updateEstadoCupo });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteEstadoCupoById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteEstadoCupo = await EstadoCupo.findOne({ where: { id } });
    if (!deleteEstadoCupo) return res.status(404).json({ message: 'EstadoCupo dont exists' });

    await deleteEstadoCupo.destroy();
    res.json({ message: 'EstadoCupo deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};