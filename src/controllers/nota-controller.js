import Nota from '../models/Nota';
import Cupo from '../models/Cupo';
import Objecion from '../models/Objecion';
import { Op } from 'sequelize';

export const getNotas = async (req, res) => {
  try {
    const notas = await Nota.findAll({
      include: [{ model: Cupo }, { model: Objecion }],
      order: [['created_at', 'desc']],
    });
    if (!notas.length > 0)
      return res.status(404).json({ message: 'Notas dont exists', data: [] });

    res.json({ message: 'Notas find successfully', data: notas });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [], err: e });
  }
};

export const getNotaById = async (req, res) => {
  try {
    const { id } = req.params;
    const nota = await Nota.findOne({
      include: [{ model: Cupo }, { model: Objecion }],
      where: { id },
      order: [['created_at', 'desc']],
    });
    if (!nota)
      return res.status(404).json({ message: 'Nota dont exists', data: {} });

    res.json({ message: 'Nota find successfully', data: nota });
  } catch (e) {
    res.json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const getNotaByCupo = async (req, res) => {
  try {
    const { cupoId } = req.params;
    const nota = await Nota.findAll({
      include: [
        {
          model: Cupo,
        },
        { model: Objecion },
      ],
      where: { cupo_id: { [Op.eq]: cupoId } },
      order: [['created_at', 'desc']],
    });
    if (!nota.length > 0)
      return res.status(404).json({
        message: 'no se encontraron notas en el cupo',
        data: {},
      });
    res.status(200).json({
      message: 'notas encontradas en este cupo',
      data: nota,
    });
  } catch (e) {
    res.status(500).json({
      message: 'lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const createNota = async (req, res) => {
  try {
    const { comentario, objecion_id, cupo_id } = req.body;
    const newNota = await Nota.create(
      {
        comentario,
        objecion_id,
        cupo_id,
      },
      { fields: ['comentario', 'objecion_id', 'cupo_id'] }
    );
    if (!newNota)
      return res.status(404).json({ message: 'Nota dont create', data: {} });

    res.json({ message: 'Nota find successfully', data: newNota });
  } catch (e) {
    res.status(500).json({ message: 'Sothing goes wrong', data: {}, err: e });
  }
};

export const updateNotaById = async (req, res) => {
  try {
    const { id } = req.params;
    const { comentario, objecion_id, cupo_id } = req.body;
    const updateNota = await Nota.findOne({ where: { id } });
    if (!updateNota)
      return res.status(404).json({ message: 'Nota dont exists' });

    await updateNota.update(
      { comentario, objecion_id, cupo_id },
      { where: { id } }
    );
    res.json({ message: 'Nota find successfully', data: updateNota });
  } catch (e) {
    res.json({ message: 'Seomthing goes wrong', data: {}, err: e });
  }
};

export const deleteNotaById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteNota = await Nota.findOne({ where: { id } });
    if (deleteNota) {
      await Nota.destroy({ where: { id } });
      res.status(200).json({
        message: 'Nota eliminada',
        data: deleteNota,
      });
    } else {
      res.status(404).json({
        message: 'nota no encontrada',
      });
    }
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};
