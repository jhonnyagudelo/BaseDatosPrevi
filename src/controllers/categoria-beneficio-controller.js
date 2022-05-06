import CategoriaBeneficio from '../models/CategoriaBeneficio';

export const getCategoriaBeneficios = async (req, res) => {
  try {
    const categoriaBeneficios = await CategoriaBeneficio.findAll();
    if (!categoriaBeneficios.length > 0)
      return res
        .status(404)
        .json({ message: 'CategoriaBeneficios dont exists', data: [] });

    res.json({
      message: 'CategoriaBeneficios find successfully',
      data: categoriaBeneficios,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [], err: e });
  }
};

export const getCategoriaBeneficioById = async (req, res) => {
  try {
    const { id } = req.params;
    const categoriaBeneficio = await CategoriaBeneficio.findOne({
      where: { id },
    });
    if (!categoriaBeneficio)
      return res
        .status(404)
        .json({ message: 'CategoriaBeneficio dont exists', data: {} });

    res.json({
      message: 'CategoriaBeneficio find successfully',
      data: categoriaBeneficio,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const createCategoriaBeneficio = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const newCategoriaBeneficio = await CategoriaBeneficio.create(
      {
        nombre,
        descripcion,
      },
      { fields: ['nombre', 'descripcion'] }
    );
    if (!newCategoriaBeneficio)
      return res
        .status(404)
        .json({ message: 'CategoriaBeneficio dont created', data: {} });

    res.json({
      message: 'CategoriaBeneficio created successfully',
      data: newCategoriaBeneficio,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateCategoriaBeneficioById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, estado } = req.body;
    const updateCategoriaBeneficio = await CategoriaBeneficio.findOne({
      where: { id },
    });
    if (!updateCategoriaBeneficio)
      return res
        .status(404)
        .json({ message: 'CategoriaBeneficio dont exists', data: {} });

    await updateCategoriaBeneficio.update(
      { nombre, descripcion, estado },
      { where: { id } }
    );
    res.json({
      message: 'CategoriaBeneficio updated successfully',
      data: updateCategoriaBeneficio,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteCategoriaBeneficioById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCategoriaBeneficio = await CategoriaBeneficio.findOne({
      where: { id },
    });
    if (!deleteCategoriaBeneficio)
      return res
        .status(404)
        .json({ message: 'CategoriaBeneficio dont exists', data: {} });

    await deleteCategoriaBeneficio.destroy();
    res.json({ message: 'CategoriaBeneficio deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};
