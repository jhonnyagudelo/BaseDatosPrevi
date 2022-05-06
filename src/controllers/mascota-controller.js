import Mascota from '../models/Mascota';
import Raza from '../models/Raza';
import Cupo from '../models/Cupo';
import { Op } from 'sequelize';

export const getMascotas = async (req, res) => {
  try {
    const mascotas = await Mascota.findAll({
      include: [{ model: Cupo }, { model: Raza }],
    });
    if (!mascotas.length > 0)
      return res
        .status(404)
        .json({ message: 'Mascotas dont exists', data: [] });

    res.json({ message: 'Mascotas find successfully', data: mascotas });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [], err: e });
  }
};

export const getMascotaById = async (req, res) => {
  try {
    const { id } = req.params;
    const mascota = await Mascota.findOne({
      include: [{ model: Cupo }, { model: Raza }],
      where: { id },
    });
    if (!mascota)
      return res.status(404).json({ message: 'Mascota dont exists', data: {} });

    res.json({ message: 'Mascota find successfully', data: mascota });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const getMascotaByCupo = async (req, res) => {
  try {
    const { cupoId } = req.params;
    const mascota = await Mascota.findAll({
      include: [
        {
          model: Raza,
          attributes: ['nombre'],
        },
        {
          model: Cupo,
        },
      ],
      where: { cupo_id: { [Op.eq]: cupoId } },
      order: [['created_at', 'desc']],
    });
    if (!mascota)
      return res.status(404).json({
        message: 'Mascotas no existe',
        data: {},
      });
    return res.status(200).json({
      message: 'Mascotas encontradas',
      data: mascota,
    });
  } catch (e) {
    res.json({
      message: 'Lo sentimos',
      data: {
        err: e,
      },
    });
  }
};

export const createMascota = async (req, res) => {
  try {
    const { genero, color, edad, cupo_id, raza_id, nombre } = req.body;
    const newMascota = await Mascota.create(
      {
        genero,
        color,
        edad,
        cupo_id,
        raza_id,
        nombre,
      },
      {
        fields: ['genero', 'color', 'edad', 'cupo_id', 'raza_id', 'nombre'],
      }
    );
    if (!newMascota)
      return res.status(404).json({ message: 'Mascota dont created' });

    res.json({ message: 'Mascota created successfully', data: newMascota });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateMascotaById = async (req, res) => {
  try {
    const { id } = req.params;
    const { genero, color, edad, cupo_id, raza_id, nombre } = req.body;
    const updateMascota = await Mascota.findOne({ where: { id } });
    if (!updateMascota)
      return res.status(404).json({ message: 'Mascota dont exists' });

    await updateMascota.update(
      {
        genero,
        color,
        edad,
        cupo_id,
        raza_id,
        nombre,
      },
      { where: { id } }
    );
    res.json({ message: 'Mascota updated successfully', data: updateMascota });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteMascotaById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMascota = await Mascota.findOne({ where: { id } });
    if (!deleteMascota)
      return res.status(404).json({ message: 'Mascota dont exists', data: {} });

    await deleteMascota.destroy();
    res.json({ message: 'Mascota deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};
