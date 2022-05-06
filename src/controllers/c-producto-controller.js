import CProducto from '../models/CProducto';

export const getCProductos = async (req, res) => {
  try {
    const cProductos = await CProducto.findAll();
    if (!cProductos.length > 0)
      return res
        .status(404)
        .json({ message: 'CProductos dont exists', data: [] });

    res.json({ message: 'CProductos find successfully', data: cProductos });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [], err: e });
  }
};

export const getProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const cProducto = await CProducto.findOne({ where: { id } });
    if (!cProducto)
      return res
        .status(404)
        .json({ message: 'CProducto dont exists', data: {} });

    res.json({ message: 'CProducto find successfully', data: cProducto });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const createCProducto = async (req, res) => {
  try {
    const { nombre } = req.body;
    const newCProducto = await CProducto.create(
      { nombre },
      { fields: ['nombre'] }
    );
    if (!newCProducto)
      return res
        .status(404)
        .json({ message: 'CProducto dont exists', data: {} });

    res.json({ message: 'CProducto created successfully', data: newCProducto });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateCProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    const updateCProducto = await CProducto.findOne({ where: { id } });
    if (!updateCProducto)
      return res.status(404).json({ message: 'CProducto dont exists' });

    await updateCProducto.update({ nombre }, { where: { id } });
    res.status(404).json({
      message: 'CProducto updated successfully',
      data: updateCProducto,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteCProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCProducto = await CProducto.findOne({ where: { id } });
    if (!deleteCProducto)
      return res
        .status(404)
        .json({ message: 'CProducto dont exists', data: {} });

    await deleteCProducto.destroy();
    res.json({ message: 'CProducto deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

