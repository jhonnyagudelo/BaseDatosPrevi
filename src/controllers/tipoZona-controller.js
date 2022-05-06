import TipoZona from '../models/TipoZona';

export const getTipoZona = async (req, res) => {
  try {
    const tipoZona = await TipoZona.findAll();
    if (tipoZona.length > 0) {
      return res.json({
        message: 'Tipo de zona encontrados',
        data: tipoZona,
      });
    } else {
      return res.status(404).json({
        message: 'No se encontro ningun tipo de zona',
        data: {},
      });
    }
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento no se encontro ningun dato',
      data: {},
      err: e,
    });
  }
};

export const getTipoZonaById = async (req, res) => {
  try {
    const { id } = req.params;
    const tipoZona = await TipoZona.findOne({ where: { id } });
    return res.json({
      message: 'El tipo de zona fue encontrado',
      data: tipoZona,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se encontro',
      data: {},
      err: e,
    });
  }
};

export const createTipoZona = async (req, res) => {
  try {
    const { nombre } = req.body;
    const newTipoZona = await TipoZona.create(
      { nombre },
      { fields: ['nombre'] }
    );
    res.json({
      message: 'El tipo de zona fue creado',
      data: newTipoZona,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos mucho',
      data: {},
      err: e,
    });
  }
};

export const updateTipoZona = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, estado } = req.body;
    const tipoZona = await TipoZona.findAll({ where: { id } });
    if (tipoZona.length > 0) {
      tipoZona.forEach(async (i) => {
        await i.update({ nombre, estado });
      });
      return res.json({
        message: 'El tipo de zona se ha actualizado',
        data: tipoZona,
      });
    } else {
      return res.status(404).json({
        message: 'Tipo de zona no existe',
      });
    }
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se actualizo',
      data: {},
      err: e,
    });
  }
};

export const deleteTipoZona = async (req, res) => {
  try {
    const { id } = req.params;
    const tipoZona = await TipoZona.findOne({ where: { id } });
    if (tipoZona) {
      await TipoZona.destroy({ where: { id } });
      res.json({
        message: 'Tipo de zona eliminada',
        data: tipoZona,
      });
    } else {
      res.status(404).json({
        message: 'No existe',
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
