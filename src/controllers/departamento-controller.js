import Departamento from '../models/Departamento';

export const getDepartamento = async (req, res) => {
  try {
    const departamento = await Departamento.findAll();
    if (!departamento.length > 0)
      return res
        .status(404)
        .json({ message: 'departamento no existe', data: {} });
    res.json({
      message: 'Departamentos encontrados',
      data: departamento,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento no se encontro',
      data: {},
      err: e,
    });
  }
};

export const getDepartamentoById = async (req, res) => {
  try {
    const { id } = req.params;
    const departamento = await Departamento.findOne({ where: { id } });
    if (!departamento)
      return res.status(404).json({
        message: 'Departamento no existe',
        data: {},
      });
    return res.json({
      message: 'Departamento encontrado',
      data: departamento,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento no se encontro',
      data: {},
      err: e,
    });
  }
};

export const createDepartamento = async (req, res) => {
  try {
    const { codigo, nombre } = req.body;
    const newDepartamento = await Departamento.create({
      codigo,
      nombre,
    });
    if (!newDepartamento)
      return res.status(404).json({
        message: 'Departamento no se creo',
        data: {},
      });
    return res.json({
      message: 'Se creo departamento satisfactoriamente',
      data: newDepartamento,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se pudo crear',
      data: {},
      err: e,
    });
  }
};

export const updateDepartamentoById = async (req, res) => {
  try {
    const { id } = req.params;
    const { codigo, nombre, estado } = req.body;
    const updateDepartamento = await Departamento.findOne({ where: { id } });
    if (!updateDepartamento)
      return res.status(400).json({
        message: 'Departamento no existe',
        data: {},
      });
    await updateDepartamento.update(
      {
        codigo,
        nombre,
        estado,
      },
      { where: { id } }
    );
    res.json({
      message: 'Departamento actualizado',
      data: updateDepartamento,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no pudo actualizar',
      data: {},
      err: e,
    });
  }
};

export const deleteDepartamentoById = async (req, res) => {
  try {
    const { id } = req.params;
    const departamento = await Departamento.findOne({ where: { id } });
    if (!departamento)
      return res.status(404).json({
        message: 'Departamento no existe',
        data: {},
      });
    await departamento.destroy();
    res.json({
      message: 'Departamento eliminado',
      data: departamento,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no pudimos hacer esta solicitud',
      data: {},
      err: e,
    });
  }
};
