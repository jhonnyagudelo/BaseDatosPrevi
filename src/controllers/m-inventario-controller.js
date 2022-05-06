import MInventario from '../models/MInventario';

export const getMInventario = async (req, res) => {
  try {
    const mInventarios = await MInventario.findAll();
    if (!mInventarios.length > 0) return res.status(404).json({ message: 'MInventario dont exists', data: [] });

    res.json({ message: 'MInventario find successfully', data: mInventarios });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [] });
  }
};

export const getMInventarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const mInventario = await MInventario.findOne({ where: { id } });
    if (!mInventario) return res.status(404).json({ message: 'MInventario dont exists', data: {} });

    res.json({ message: 'MInventario find successfully', data: mInventario });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const createMInventario = async (req, res) => {
  try {
    const {
      nota,
      descripcion,
      m_naturaleza,
      cantidad,
      serie,
      valor_unitario,
      rango_inicial,
      rango_final,
      consecutivo,
      concepto,
      usuario_encargado,
      usuario_entregado,
      confirmacion,
      proveedor_id,
      inventario_id
    } = req.body;
    const newMInventario = await MInventario.create({
      nota,
      descripcion,
      m_naturaleza,
      cantidad,
      serie,
      valor_unitario,
      valor_total: (cantidad * valor_unitario),
      rango_inicial,
      rango_final,
      consecutivo,
      concepto,
      usuario_encargado,
      usuario_entregado,
      confirmacion,
      proveedor_id,
      inventario_id
    }, {
      fields: ['nota',
        'descripcion',
        'm_naturaleza',
        'cantidad',
        'serie',
        'valor_unitario',
        'valor_total',
        'rango_inicial',
        'rango_final',
        'consecutivo',
        'concepto',
        'usuario_encargado',
        'usuario_entregado',
        'confirmacion',
        'proveedor_id',
        'inventario_id']
    });
    if (!newMInventario) return res.status(404).json({ message: 'MInventario dont created', data: {} });

    res.json({ message: 'MInventario created successfully', data: newMInventario });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateMInventarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nota,
      descripcion,
      m_naturaleza,
      cantidad,
      serie,
      valor_unitario,
      rango_inicial,
      rango_final,
      consecutivo,
      concepto,
      usuario_encargado,
      usuario_entregado,
      confirmacion,
      proveedor_id,
      inventario_id
    } = req.body;
    const updateMInventario = await MInventario.findOne({ where: { id } });
    if (!updateMInventario) return res.status(404).json({ message: 'MInventario dont exists', data: {} });

    await updateMInventario.update({
      nota,
      descripcion,
      m_naturaleza,
      cantidad,
      serie,
      valor_unitario,
      valor_total: (cantidad * valor_unitario),
      rango_inicial,
      rango_final,
      consecutivo,
      concepto,
      usuario_encargado,
      usuario_entregado,
      confirmacion,
      proveedor_id,
      inventario_id
    }, { where: { id } });
    res.json({ message: 'MInventario updated successfully', data: updateMInventario });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteMInventarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMInventario = await MInventario.findOne({ where: { id } });
    if (!deleteMInventario) return res.status(404).json({ message: 'MInventario dont exists', data: {} });

    await deleteMInventario.destroy();
    res.json({ message: 'MInventario deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};
