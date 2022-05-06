import Componente from '../models/Componente';

export const getComponente = async (req, res) => {
  try {
    const componente = await Componente.findAll({});
    if (!componente.length > 0)
      return res
        .status(404)
        .json({ message: 'componente dont exists', data: [] });

    return res.json({
      message: 'componente find successfully',
      data: componente,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: [],
      err: e,
    });
  }
};

export const getComponenteById = async (req, res) => {
  try {
    const { id } = req.params;
    const componenete = await Componente.findOne({
      where: { id },
    });
    return res.json({
      message: 'Componente find successfully',
      data: componenete,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};

export const createComponente = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const newComponente = await Componente.create(
      { nombre, descripcion },
      { fields: ['nombre', 'descripcion'] }
    );
    return res.json({
      message: 'Componente created successfully',
      data: newComponente,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};

export const updateRolByComponente = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, estado } = req.body;
    const updateComponente = await Componente.findOne({ where: { id } });
    if (!updateComponente)
      return res.json({ message: 'Componente dont exists', data: {} });

    await updateComponente.update(
      { nombre, descripcion, estado },
      { where: { id } }
    );
    return res.json({
      message: 'Componente updated successfully',
      data: updateComponente,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};

export const deleteComponenteById = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteComponente = await Componente.findOne({
      where: { id },
    });

    if (!deleteComponente)
      return res
        .status(404)
        .json({ message: 'Componente dont exists', data: {} });

    await deleteComponente.destroy();

    res.json({ message: 'Componente deleted successfully', data: {} });
  } catch (e) {
    res.json({ message: 'Something goes wrong', data: {}, err: e });
  }
};
