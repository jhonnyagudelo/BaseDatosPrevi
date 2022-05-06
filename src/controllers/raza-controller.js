import Raza from '../models/Raza';
import Especie from '../models/Especie';
import { Op } from 'sequelize';

export const getRazas = async (req, res) => {
  try {
    const razas = await Raza.findAll({
      include: [
        {
          model: Especie,
          attributes: ['nombre'],
        },
      ],
    });
    if (!razas.length > 0)
      return res.status(404).json({ message: 'Razas dont exists', data: [] });

    res.json({ message: 'Razas find successfully', data: razas });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [], err: e });
  }
};

export const getRazaById = async (req, res) => {
  try {
    const { id } = req.params;
    const raza = await Raza.findOne({
      where: { id },
      include: [
        {
          model: Especie,
          attributes: ['nombre'],
        },
      ],
    });
    if (!raza)
      return res.status(404).json({ message: 'Raza dont exists', data: {} });

    res.json({ message: 'Raza find successfully', data: raza });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const getEspecieByRaza = async (req, res) => {
  try {
    const { especieId } = req.params;
    const raza = await Raza.findAll({
      include: [{ model: Especie }],
      where: { especie_id: { [Op.eq]: especieId } },
    });
    if (!raza)
      return res.status(404).json({
        message: 'Raza no se encontro',
        data: {},
      });
    res.status(200).json({
      message: 'Razas encontradas',
      data: raza,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const createRaza = async (req, res) => {
  try {
    const { nombre, especie_id } = req.body;
    const newRaza = await Raza.create(
      { nombre, especie_id },
      { fields: ['nombre', 'especie_id'] }
    );
    if (!newRaza)
      return res.status(404).json({ message: 'Raza dont created', data: {} });

    res.json({ message: 'Raza created successfully', data: newRaza });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateRazaById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, especie_id, estado } = req.body;
    const updateRaza = await Raza.findOne({ where: { id } });
    if (!updateRaza)
      return res.status(404).json({ message: 'Raza dont exists', data: {} });

    await updateRaza.update({ nombre, especie_id, estado }, { where: { id } });
    res.json({ message: 'Raza updated successfully', data: updateRaza });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteRazaById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteRaza = await Raza.findOne({ where: { id } });
    if (!deleteRaza)
      res.status(404).json({ message: 'Raza dont exists', data: {} });

    await deleteRaza.destroy();
    res.json({ message: 'Raza deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};
