import Objecion from '../models/Objecion';
import CategoriaNota from '../models/CategoriaNota';
import { Op } from 'sequelize';
export const getObjeciones = async (req, res) => {
  try {
    const objeciones = await Objecion.findAll({
      include: [{ model: CategoriaNota, as: 'categoria_nota', required: true }],
    });
    if (!objeciones.length > 0)
      return res
        .status(404)
        .json({ message: 'Objecion dont exists', data: [] });

    res.json({ message: 'Objecion find successfully', data: objeciones });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [], err: e });
  }
};

export const getCategoriaByObjecion = async (req, res) => {
  try {
    const { categoriaId } = req.params;
    const objecion = await Objecion.findAll({
      include: [
        {
          model: CategoriaNota,
        },
      ],
      where: { categoria_nota_id: { [Op.eq]: categoriaId } },
    });
    if (!objecion)
      return res.status(404).json({
        message: 'objecion no se encontro',
        data: {},
      });
    res.status(200).json({
      message: 'Objecion encontrada',
      data: objecion,
    });
  } catch (e) {
    res.status(500).json({
      message: 'lo siento',
      data: {},
      err: e,
    });
  }
};

export const getObjecionById = async (req, res) => {
  try {
    const { id } = req.params;
    const objecion = await Objecion.findOne({
      include: [{ model: CategoriaNota, as: 'categoria_nota', required: true }],
      where: { id },
    });
    if (!objecion)
      return res
        .status(404)
        .json({ message: 'Objecion dont exists', data: {} });

    res.json({ message: 'Objecion find successfully', data: objecion });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const createObjecion = async (req, res) => {
  try {
    const { descripcion, categoria_nota_id } = req.body;
    const newObjecion = await Objecion.create(
      {
        descripcion,
        categoria_nota_id,
      },
      { fields: ['descripcion', 'categoria_nota_id'] }
    );
    if (!newObjecion)
      return res
        .status(404)
        .json({ message: 'Objecion dont exists', data: {} });

    res.json({ message: 'Objecion created successfully', data: newObjecion });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateObjecion = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion, categoria_nota_id } = req.body;
    const updateObjecion = await Objecion.findOne({ where: { id } });
    if (!updateObjecion)
      return res
        .status(404)
        .json({ message: 'Objecion dont exists', data: {} });

    await updateObjecion.update(
      { descripcion, categoria_nota_id },
      { where: { id } }
    );
    res.json({
      message: 'Objecion updated successfully',
      data: updateObjecion,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteObjecion = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteObjecion = await Objecion.findOne({ where: { id } });
    if (!deleteObjecion)
      return res
        .status(404)
        .json({ message: 'Objecion dont exists', data: {} });

    await deleteObjecion.destroy();
    res.json({ message: 'Objecion deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};
