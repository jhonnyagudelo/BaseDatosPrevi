import Especie from '../models/Especie';

export const getEspecies = async (req, res) => {
  try {
    const especies = await Especie.findAll();
    if (!especies.length > 0) return res.status(404).json({ message: 'Especies dont exists', data: [] });

    res.json({ message: 'Especies find successfully', data: especies });
  } catch (e) {
    res.status(500).json({ message: 'Something goes worng', data: [], err: e });
  }
};

export const getEspecieById = async (req, res) => {
  try {
    const { id } = req.params;
    const especie = await Especie.findOne({ where: { id } });
    if (!especie) return res.status(404).json({ message: 'Especie dont exists', data: {} });

    res.json({ message: 'Especie find successfully', data: especie });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', dat: {}, err: e });
  }
};

export const createEspecie = async (req, res) => {
  try {
    const { nombre } = req.body;
    const newEspecie = await Especie.create({ nombre }, { fields: ['nombre'] });
    if (!newEspecie) return res.status(404).json({ message: 'Especie dont created', data: {} });

    res.json({ message: 'Especie created successfully', data: newEspecie });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateEspecieById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    const updateEspecie = await Especie.findOne({ where: { id } });
    if (!updateEspecie) return res.status(404).json({ message: 'Especie dont exists', data: {} });

    await updateEspecie.update({ nombre }, { where: { id } });
    res.json({ message: 'Especie updated successfully', data: updateEspecie });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteEspecieById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteEspecie = await Especie.findOne({ where: { id } });
    if (!deleteEspecie) return res.status(404).json({ message: 'Especie dont  exists', data: {} });

    await deleteEspecie.destroy();
    res.json({ message: 'Especie deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};