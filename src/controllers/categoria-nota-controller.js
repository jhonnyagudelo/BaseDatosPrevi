import CategoriaNota from '../models/CategoriaNota';

export const getCategoriaNotas = async (req, res) => {
  try {
    const categoriaNotas = await CategoriaNota.findAll();
    if (!categoriaNotas.length > 0)
      return res
        .status(404)
        .json({ message: 'CategoriaNotas dont exists', data: [] });

    res.json({
      message: 'CategoriaNotas find successfully',
      data: categoriaNotas,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [], err: e });
  }
};

export const getCategoriaNotaById = async (req, res) => {
  try {
    const { id } = req.params;
    const categoriaNota = await CategoriaNota.findOne({ where: { id } });
    if (!categoriaNota)
      return res
        .status(404)
        .json({ message: 'CategoriaNota dont exists', data: {} });

    res.json({
      message: 'CategoriaNota find successfully',
      data: categoriaNota,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const createCategoriaNota = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const newCategoriaNota = await CategoriaNota.create(
      { nombre, descripcion },
      { fields: ['nombre', 'descripcion'] }
    );
    if (!newCategoriaNota)
      return res.json({ message: 'CategoriaNota dont created' });

    res.json({
      message: 'CategoriaNota created successfully',
      data: newCategoriaNota,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateCategoriaNotaById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    const updateCategoriaNota = await CategoriaNota.findOne({ where: { id } });
    if (!updateCategoriaNota)
      return res
        .status(404)
        .json({ message: 'CategoriaNota dont exists', data: {} });

    await updateCategoriaNota.update(
      { nombre, descripcion },
      { where: { id } }
    );
    res.json({
      message: 'CategoriaNota updated successfully',
      data: updateCategoriaNota,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteCatagoriaNotaById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCategoriaNota = await CategoriaNota.findOne({ where: { id } });
    if (!deleteCategoriaNota)
      return res
        .status(404)
        .json({ message: 'CategoriaNota dont exists', data: {} });

    await deleteCategoriaNota.destroy();
    res.json({ message: 'CategoriaNota deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};
