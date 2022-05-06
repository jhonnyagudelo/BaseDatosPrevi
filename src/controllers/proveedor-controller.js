import Proveedor from '../models/Proveedor';

export const getProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.findAll();
    if (!proveedores.length > 0)
      return res
        .status(404)
        .json({ message: 'Proveedores dont exists', data: [] });

    res.json({ message: 'Proveedores find successfully', data: proveedores });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [], err: e });
  }
};

export const getProveedorById = async (req, res) => {
  try {
    const { id } = req.params;
    const proveedor = await Proveedor.findOne({ where: { id } });
    if (!proveedor)
      return res
        .status(404)
        .json({ message: 'Proveedor dont exists', data: {} });

    res.json({ message: 'Proveedor find successfully', data: proveedor });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const createProveedor = async (req, res) => {
  try {
    const { nombre } = req.body;
    const newProveedor = await Proveedor.create(
      { nombre },
      { fields: ['nombre'] }
    );
    if (!newProveedor)
      return res
        .status(404)
        .json({ message: 'Proveedor dont created', data: {} });

    res.json({ message: 'Proveedor created successfully', data: newProveedor });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateProveederById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    const updateProveedor = await Proveedor.findOne({ where: { id } });
    if (!updateProveedor)
      return res
        .status(404)
        .json({ message: 'Proveedor dont exists', data: {} });

    await updateProveedor.update({ nombre }, { where: { id } });
    res.json({
      message: 'Proveedor updated successfully',
      data: updateProveedor,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteProveedorById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProveedor = await Proveedor.findOne({ where: { id } });
    if (!deleteProveedor)
      return res
        .status(404)
        .json({ message: 'Proveedor dont exists', data: {} });

    await deleteProveedor.destroy();
    res.json({ message: 'Proveedor deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};
