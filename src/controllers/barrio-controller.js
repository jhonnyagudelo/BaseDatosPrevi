import Barrio from '../models/Barrio';
import Comuna from '../models/Comuna';

export const getBarrio = async (req, res) => {
  try {
    const barrio = await Barrio.findAll({
      include: [
        {
          model: Comuna,
          atributes: [],
        },
      ],
    });
    if (!barrio.length > 0)
      return res.status(404).json({
        message: 'barrio no existe',
        data: {},
      });
    return res.json({
      messaje: 'Barrio encontrado',
      data: barrio,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se encontro',
      data: {},
      err: e,
    });
  }
};

export const getBarrioById = async (req, res) => {
  try {
    const { id } = req.params;
    const barrio = await Barrio.findOne({
      where: { id },
      include: {
        model: Comuna,
        atributes: [],
      },
    });
    if (!barrio)
      return res.status(404).json({
        message: 'Barrio no encontrado',
        data: {},
      });
    res.json({
      message: 'Barrio encontrado',
      data: barrio,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no lo encontramos',
      data: {},
      err: e,
    });
  }
};

export const createBarrio = async (req, res) => {
  try {
    const { comuna_id, estrato, nombre, tipo_zona } = req.body;
    const newBarrio = await Barrio.create(
      {
        comuna_id,
        estrato,
        nombre,
        tipo_zona,
      },
      {
        fields: ['comuna_id', 'estrato', 'nombre', 'tipo_zona'],
      }
    );
    return res.json({
      message: 'Barrio creado',
      data: newBarrio,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no podemos guardar el dato',
      data: {},
      err: e,
    });
  }
};

export const updateBarrioById = async (req, res) => {
  try {
    const { id } = req.params;
    const { comuna_id, estrato, nombre, tipo_zona, estado } = req.body;
    const updateBarrio = await Barrio.findOne({ where: { id } });

    if (!updateBarrio)
      return res.status(404).json({
        message: 'El barrio no existe',
        data: {},
      });
    await updateBarrio.update(
      {
        comuna_id,
        estrato,
        nombre,
        tipo_zona,
        estado,
      },
      {
        where: { id },
      }
    );
    res.json({
      message: 'Se actualiza el barrio',
      data: updateBarrio,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no pudimos',
      data: {},
      err: e,
    });
  }
};

export const deleteBarrioById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBarrio = await Barrio.findOne({ where: { id } });
    if (!deleteBarrio) {
      return res.status(500).json({
        message: 'Barrio no existe',
        data: {},
      });
    } else {
      await deleteBarrio.destroy();
      res.json({
        message: 'Barrio eliminado',
        data: deleteBarrio,
      });
    }
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos hubo un error',
      data: {},
      err: e,
    });
  }
};
