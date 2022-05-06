import Kardex from '../models/Kardex';
import Inventario from '../models/Inventario';

export const getKardex = async (req, res) => {
  try {
    const kardex = await Kardex.findAll({ include: [{ model: Inventario }] });
    if (!kardex.length > 0)
      return res.json({ message: 'Kardex dont exists', data: [] });

    res.json({ message: 'Kardex find successfully', data: kardex });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [], err: e });
  }
};

export const getKardexById = async (req, res) => {
  try {
    const { id } = req.params;
    const kardex = await Kardex.findOne({
      include: [{ model: Inventario }],
      where: { id },
    });
    if (!kardex)
      return res.status(404).json({ message: 'Kardex dont exists', data: {} });

    res.json({ message: 'kardex find exists', data: kardex });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const createKardex = async (req, res) => {
  try {
    const { t_estado, cantidad, total, valor_unitario, inventario_id } =
      req.body;
    const newKardex = await Kardex.create(
      {
        t_estado,
        cantidad,
        total,
        valor_unitario,
        valor_total: cantidad * valor_unitario,
        inventario_id,
      },
      {
        fields: [
          't_estado',
          'cantidad',
          'total',
          'valor_unitario',
          'valor_total',
          'inventario_id',
        ],
      }
    );
    if (!newKardex)
      return res.status(404).json({ message: 'Kardex dont created', data: {} });

    res.json({ message: 'Kardex created successfully', dat: newKardex });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateKardexById = async (req, res) => {
  try {
    const { id } = req.params;
    const { t_estado, cantidad, total, valor_unitario, inventario_id } =
      req.body;
    const updateKardex = await Kardex.findOne({ where: { id } });
    if (!updateKardex)
      return res.status(404).json({ message: 'Kardex dont exists', data: {} });

    await updateKardex.update(
      {
        t_estado,
        cantidad,
        total,
        valor_unitario,
        valor_total: cantidad * valor_unitario,
        inventario_id,
      },
      { where: { id } }
    );
    res.json({ message: 'Kardex updated successfully', data: updateKardex });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteKardexById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteKardex = await Kardex.findOne({ where: { id } });
    if (!deleteKardex)
      return res.status(404).json({ message: 'Kardex dont exists', data: {} });

    await deleteKardex.destroy();
    res.json({ message: 'Kardex deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

