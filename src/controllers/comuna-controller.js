import Comuna from '../models/Comuna';
import Zona from '../models/Zona';
import { Op } from 'sequelize';
export const getComuna = async (req, res) => {
  try {
    const comuna = await Comuna.findAll({
      include: [{ model: Zona }],
    });
    if (!comuna.length > 0)
      return res.status(404).json({
        message: 'La comuna no existe',
        data: {},
      });
    return res.json({
      message: 'Comunas encontradas',
      data: comuna,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se encontro',
      data: {},
      err: e,
    });
  }
};

export const getComunaById = async (req, res) => {
  try {
    const { id } = req.params;
    const comuna = await Comuna.findOne({
      where: { id },
      include: { model: Zona },
    });
    if (!comuna)
      return res.status(404).json({
        message: 'La comuna no existe',
        data: {},
      });
    return res.json({
      message: 'La comuna fue encontrada',
      data: comuna,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no encontramos resultados',
      data: {},
      err: e,
    });
  }
};

export const comunaByZona = async (req, res) => {
  try {
    const { zonaId } = req.params;
    const comuna = await Comuna.findAll({
      include: { model: Zona },
      where: { zona_id: { [Op.eq]: zonaId } },
    });
    if (!comuna)
      return res.status(404).json({
        message: 'comuna no existe',
        data: {},
      });
    return res.json({
      message: 'comuna encontrada',
      data: comuna,
    });
  } catch (e) {
    res.status(500).json({
      message: 'lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const createComuna = async (req, res) => {
  try {
    const { zona_id, nombre } = req.body;
    const newComuna = await Comuna.create(
      { zona_id, nombre },
      { fields: ['zona_id', 'nombre'] }
    );
    res.json({
      message: 'La comuna',
      data: newComuna,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se creo la comuna',
      data: {},
      err: e,
    });
  }
};

export const updateComuna = async (req, res) => {
  try {
    const { id } = req.params;
    const { zona_id, nombre, estado } = req.body;
    const comuna = await Comuna.findOne({ where: { id } });
    if (comuna.length > 0) {
      comuna.forEach(async (i) => {
        await i.update({
          zona_id,
          nombre,
          estado,
        });
      });
      return res.json({
        message: 'La comuna se a actualizado',
        data: comuna,
      });
    } else {
      return res.status(404).json({ message: 'Comuna no existe' });
    }
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se actualizo',
      data: {},
      err: e,
    });
  }
};

export const deleteComuna = async (req, res) => {
  try {
    const { id } = req.params;
    const comuna = await Comuna.findOne({ where: { id } });
    if (comuna) {
      await comuna.destroy({ where: { id } });
      res.json({
        message: 'Comuna eliminado',
        data: comuna,
      });
    }
  } catch (e) {
    res.json({
      message: 'Lo sentimos no se pudo eliminar',
      data: {},
      err: e,
    });
  }
};
