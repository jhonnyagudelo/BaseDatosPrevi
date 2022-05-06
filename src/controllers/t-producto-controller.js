import TProducto from '../models/TProducto';
import CProducto from '../models/CProducto';
import Prst from '../models/Prst';

export const getTProductos = async (req, res) => {
  try {
    const tProductos = await TProducto.findAll({ include: [{ model: CProducto }, { model: Prst }] });
    if (!tProductos.length > 0) return res.status(404).json({ message: 'TProductos dont exists', data: [] });

    res.json({ message: 'TProducto find successfully', data: tProductos });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [], err: e });
  }
};

export const getTPoductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const tProducto = await TProducto.findOne({ where: { id } });
    if (!tProducto) return res.status(404).json({ message: 'TProducto dont exists', data: {} });

    res.json({ message: 'TProducto find successfully', data: tProducto });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const createTProducto = async (req, res) => {
  try {
    const { nombre, descripcion, consecutivo, c_producto_id, prst_id } = req.body;
    const newTProducto = await TProducto.create({
      nombre,
      descripcion,
      consecutivo,
      c_producto_id,
      prst_id
    }, { fields: ['nombre', 'descripcion', 'consecutivo', 'c_producto_id', 'prst_id'] });
    if (!newTProducto) return res.status(404).json({ message: 'TProducto dont created', data: {} });

    res.json({ message: 'TProducto created successfully', data: newTProducto });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateTProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, consecutivo, c_producto_id, prst_id } = req.body;
    const updateTProducto = await TProducto.findOne({ where: { id } });
    if (!updateTProducto) return res.status(404).json({ message: 'TProducto dont exists', data: {} });

    await updateTProducto.update({ nombre, descripcion, consecutivo, c_producto_id, prst_id }, { where: { id } });
    res.json({ message: 'TProducto updated successfully', data: updateTProducto });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteTProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTProducto = await TProducto.findOne({ where: { id } });
    if (!deleteTProducto) return res.status(404).json({ message: 'TProducto dont exists', data: {} });

    await deleteTProducto.destroy();
    res.json({ message: 'TProducto deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};