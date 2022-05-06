import Zona from '../models/Zona';
import TipoZona from '../models/TipoZona';
import Municipio from '../models/Municipio';
import { Op } from 'sequelize';

export const getZona = async (req, res) => {
  try {
    const zona = await Zona.findAll({
      include: [
        {
          model: TipoZona,
          atributes: [],
        },
        {
          model: Municipio,
          atributes: [],
        },
      ],
    });
    if (!zona.length > 0)
      return res.status(400).json({
        message: 'La zona no existe',
        data: {},
      });
    return res.json({
      message: 'Zonas encontradas',
      data: zona,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se encontro',
      data: {},
      err: e,
    });
  }
};

export const zonaByMuniciopio = async (req, res) => {
  try {
    const { municipioId } = req.params;
    const zona = await Zona.findAll({
      include: [
        {
          model: TipoZona,
          atributes: [],
        },
        {
          model: Municipio,
          atributes: [],
        },
      ],
      where: { municipio_id: { [Op.eq]: municipioId } },
    });
    if (!zona)
      return res.status(404).json({
        message: 'zona no existe',
        data: {},
      });
    return res.json({
      message: 'Zona encontrada',
      data: zona,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const getZonaById = async (req, res) => {
  try {
    const { id } = req.params;
    const zona = await Zona.findOne({ where: { id } });
    if (!zona)
      return res.status(404).json({ message: 'Zona dont exists', data: {} });

    return res.json({ message: 'Zona find successfully', data: zona });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no encontramos resultados',
      data: {},
      err: e,
    });
  }
};

export const createZona = async (req, res) => {
  try {
    const { t_zona, municipio_id, nombre } = req.body;
    const newZona = await Zona.create(
      {
        t_zona,
        municipio_id,
        nombre,
      },
      {
        fields: ['t_zona', 'municipio_id', 'nombre'],
      }
    );
    res.json({
      message: 'La zona ha sido creada',
      data: newZona,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se creo la zona',
      data: {},
      err: e,
    });
  }
};

export const updateZonaById = async (req, res) => {
  try {
    const { id } = req.params;
    const { t_zona, municipio_id, nombre, estado } = req.body;
    const updateZona = await Zona.findOne({ where: { id } });
    if (!updateZona)
      return res.status(404).json({ message: 'Zona dont exists', data: {} });

    await updateZona.update(
      { t_zona, municipio_id, nombre, estado },
      { where: { id } }
    );
    return res.json({ message: 'La zona se actualizo', data: updateZona });
  } catch (e) {
    res
      .status(500)
      .json({ message: 'Lo sentimos no pudimos actualizar', data: {}, err: e });
  }
};

export const deleteZonaById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteZona = await Zona.findOne({ where: { id } });
    if (!deleteZona)
      return res.status(404).json({ message: 'Zona dont exists', data: {} });

    await deleteZona.destroy();
    res.json({ message: 'Zona deleted successfully' });
  } catch (e) {
    res
      .status(500)
      .json({ message: 'Lo sentimos no se pudo eliminar', data: {}, err: e });
  }
};
