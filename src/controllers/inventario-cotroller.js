import Inventario from '../models/Inventario';
import TProducto from '../models/TProducto';
import Sede from '../models/Sede';

export const getInventarios = async (req, res) => {
  try {
    const inventarios = await Inventario.findAll({
      include: [{ model: TProducto }, { model: Sede }],
    });
    if (!inventarios.length > 0)
      return res
        .status(404)
        .json({ message: 'Inventarios dont exists', data: [] });

    res.json({ message: 'Inventarios find successfully', data: inventarios });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [] });
  }
};

export const getInventarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const inventario = await Inventario.findOne({
      include: [{ model: TProducto }, { model: Sede }],
      where: { id },
    });
    if (!inventario)
      return res
        .status(404)
        .json({ message: 'Inventario dont exists', data: {} });

    res.json({ message: 'Inventario find successfully', data: inventario });
  } catch (e) {
    res.status(404).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const createInventario = async (req, res) => {
  try {
    const { descripcion, t_producto_id, sede_id } = req.body;
    const newInvnetario = await Inventario.create(
      {
        descripcion,
        t_producto_id,
        sede_id,
      },
      { fields: ['descripcion', 't_producto_id', 'sede_id'] }
    );
    if (!newInvnetario)
      return res
        .status(404)
        .json({ message: 'Inventario dont created', data: {} });

    res.json({
      message: 'Inventario created successfully',
      data: newInvnetario,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateInventarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion, t_producto_id, sede_id } = req.body;
    const updateInventario = await Inventario.findOne({ where: { id } });
    if (!updateInventario)
      return res
        .status(404)
        .json({ message: 'Inventario dont exists', data: {} });

    await updateInventario.update(
      { descripcion, t_producto_id, sede_id },
      { where: { id } }
    );
    res.json({
      message: 'Inventario updated successfully',
      data: updateInventario,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteInventarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteInventario = await Inventario.findOne({ where: { id } });
    if (!deleteInventario)
      return res
        .status(404)
        .json({ message: 'Inventario dont exists', data: {} });

    await deleteInventario.destroy();
    res.json({ message: 'Inventario deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};
