import MicroEmpresa from '../models/MicroEmpresa';
import Cliente from '../models/Cliente';

export const getMiEmpresa = async (req, res) => {
  try {
    const miEmpresa = await MicroEmpresa.findAll({
      include: {
        model: Cliente,
        attributes: [],
      },
    });
    if (!miEmpresa.length > 0)
      return res.status(400).json({
        message: 'La microempresa no existe',
        data: {},
      });
    return res.json({
      message: 'Microempresas encontradas',
      data: miEmpresa,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se encontro',
      data: {},
      err: e,
    });
  }
};

export const getMiEmpresaById = async (req, res) => {
  try {
    const { id } = req.params;
    const miEmpresa = await MicroEmpresa.findOne({ where: { id } });
    return res.json({
      message: 'La microempresa fue encontrada',
      data: miEmpresa,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no encontramos resultados',
      data: {},
      err: e,
    });
  }
};

export const createMiEmpresa = async (req, res) => {
  try {
    const { cliente_id, nombre, direccion } = req.body;
    const newMiEmpresa = await MicroEmpresa.create(
      {
        cliente_id,
        nombre,
        direccion,
      },
      {
        fields: ['cliente_id', 'nombre', 'direccion'],
      }
    );
    res.json({
      message: 'La microempresa se creo satisfatoriamente',
      data: newMiEmpresa,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se creo la microempresa',
      data: {},
      err: e,
    });
  }
};

export const updateMiEmpresa = async (req, res) => {
  try {
    const { id } = req.params;
    const { cliente_id, nombre, direccion, estado } = req.body;
    const miEmpresa = await MicroEmpresa.findOne({ where: { id } });
    if (miEmpresa.length > 0) {
      miEmpresa.forEach((async (i) => {
        await i.update({
          cliente_id,
          nombre,
          direccion,
          estado,
        });
      }));
      return res.json({
        message: 'La micro empresa se ha actualizado',
        data: miEmpresa,
      });
    } else {
      return res.status(404).json({ message: 'La microempresa no existe' });
    }
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se actualizo',
      data: {},
      err: e,
    });
  }
};

export const deleteMiEmpresa = async (req, res) => {
  try {
    const { id } = req.params;
    const miEmpresa = await MicroEmpresa.findOne({ where: { id } });
    if (miEmpresa) {
      await MicroEmpresa.destroy({ where: { id } });
      res.json({
        message: 'Microempresa eliminada',
        data: miEmpresa,
      });
    }
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se pudo eliminar',
      data: {},
      err: e,
    });
  }
};
