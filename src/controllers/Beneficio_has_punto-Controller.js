import Beneficio_has_punto from '../models/Beneficio_has_punto';
import Beneficio from '../models/Beneficio';
import PuntoBeneficio from '../models/PuntoBeneficio';
import Referencia from '../models/Referencia';

export const getEspecificacionesPrograma = async (req, res) => {
  try {
    const especificaciones = await Beneficio_has_punto.findAll({
      include: [
        { model: Referencia },
        { model: Beneficio },
        { model: PuntoBeneficio },
      ],
    });
    if (!especificaciones.length > 0)
      return res.status(404).json({
        message: 'Especificaciones no encontradas',
        data: {},
      });
    res.json({
      message: 'Especificaciones encontradas',
      data: especificaciones,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};

export const getEspecificacionesProgramaId = async (req, res) => {
  try {
    const { id } = req.params;
    const especificaciones = await Beneficio_has_punto.findOne({
      include: [
        { model: Beneficio },
        { model: PuntoBeneficio },
        { model: Referencia },
      ],
      where: { id },
    });
    return res.json({
      message: ' especificaciones encontradas',
      data: especificaciones,
    });
  } catch (e) {
    res.status(500).json({
      message: 'lo siento no se encontro',
      data: {},
      err: e,
    });
  }
};

export const createEspecificaciones = async (req, res) => {
  try {
    const { beneficio_id, beneficio_punto_id, referencia_id } = req.body;
    const newEspecificacion = await Beneficio_has_punto.create(
      {
        beneficio_id,
        beneficio_punto_id,
        referencia_id,
      },
      {
        fields: ['beneficio_id', 'referencia_id', 'beneficio_punto_id'],
      }
    );
    return res.json({
      message: 'especificacion creada',
      data: newEspecificacion,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento no se pudo crear las especificaciones',
      data: {},
      err: e,
    });
  }
};

export const updateEspecificaionId = async (req, res) => {
  try {
    const { id } = req.params;
    const { beneficio_id, beneficio_punto_id, referencia_id, estado } =
      req.body;
    const especificaciones = await Beneficio_has_punto.findAll({
      where: { id },
    });
    if (especificaciones.length > 0) {
      especificaciones.forEach(async (i) => {
        await i.update({
          beneficio_id,
          beneficio_punto_id,
          referencia_id,
          estado,
        });
      });
      return res.json({
        message: ' se actualizo la especificacion',
        data: especificaciones,
      });
    } else {
      return res.status(404).json({ message: 'La especificacion no existe' });
    }
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento no se encontro',
      data: {},
      err: e,
    });
  }
};

export const deleteEspecificacionById = async (req, res) => {
  try {
    const { id } = req.params;
    const especificacion = await Beneficio_has_punto.findOne({
      where: { id },
    });
    if (especificacion) {
      await Beneficio_has_punto.destroy({
        where: { id },
      });
      res.json({
        message: ' Especificacion eliminada',
      });
    } else {
      res.status(404).json({
        message: 'No existe',
      });
    }
  } catch (e) {
    res.json({
      message: 'Lo siento no se pudo eliminar',
      data: {},
      err: e,
    });
  }
};
