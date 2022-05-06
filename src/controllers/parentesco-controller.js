import Parentesco from '../models/Parentesco';

export const getParentescos = async (req, res) => {
  try {
    const parentescos = await Parentesco.findAll();
    if (!parentescos.length > 0) return res.status(404).json({ message: 'Parentescos dont exists', data: [] });

    return res.json({
      message: 'Parentescos find successfully',
      data: parentescos,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};

export const getParentescoById = async (req, res) => {
  try {
    const { id } = req.params;
    const parentesco = await Parentesco.findOne({
      where: { id },
    });
    return res.json({
      message: 'Parentesco encontrado',
      data: parentesco,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};

export const createParenteco = async (req, res) => {
  try {
    const { nombre } = req.body;
    const newParatensco = await Parentesco.create(
      { nombre },
      {
        fields: ['name'],
      }
    );
    res.json({
      messenger: 'El parentesco a sido agregado satisfactoriamente',
      data: newParatensco,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};

export const updateParentesco = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, estado } = req.body;
    const parentesco = await Parentesco.findAll({ where: { id } });
    if (parentesco.length > 0) {
      parentesco.forEach(async (i) => {
        await i.update({ nombre, estado });
      });
      return res.json({
        message: 'El parentesco ha sido actualizado',
        data: parentesco,
      });
    } else {
      return res.status(404).json({ message: 'El parentesco no existe' });
    }
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};

export const deleteParentesco = async (req, res) => {
  try {
    const { id } = req.params;
    const parentesco = await Parentesco.findOne({ where: { id } });
    if (parentesco) {
      await Parentesco.destroy({ where: { id } });
      res.json({
        message: 'Parentesco eliminado',
      });
    } else {
      res.status(404).json({ message: 'No existe' });
    }
  } catch (e) {
    res.json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};
