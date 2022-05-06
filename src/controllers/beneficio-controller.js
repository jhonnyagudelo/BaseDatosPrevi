import Beneficio from '../models/Beneficio';
import CategoriaBeneficio from '../models/CategoriaBeneficio';

export const getBeneficios = async (req, res) => {
  try {
    const beneficios = await Beneficio.findAll({
      include: [{ model: CategoriaBeneficio }],
    });
    if (!beneficios.length > 0)
      return res
        .status(404)
        .json({ message: 'Beneficio dont exists', data: [] });

    res.json({ message: 'Beneficios find successfully', data: beneficios });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [], err: e });
  }
};

export const getBeneficioById = async (req, res) => {
  try {
    const { id } = req.params;
    const beneficios = await Beneficio.findOne({
      include: [{ model: CategoriaBeneficio }],
      where: { id },
    });
    if (!beneficios)
      return res
        .status(404)
        .json({ message: 'Beneficio dont exists', data: {} });

    res.json({ message: 'Beneficio find successfully', data: beneficios });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const createBeneficio = async (req, res) => {
  try {
    const { nombre, categoria_beneficio_id } = req.body;
    const newBeneficio = await Beneficio.create(
      {
        nombre,
        categoria_beneficio_id,
      },
      { fields: ['nombre', 'categoria_beneficio_id'] }
    );
    if (!newBeneficio)
      return res
        .status(404)
        .json({ message: 'Beneficio dont exists', data: {} });

    res.json({
      message: 'Beneficio created succcessfully',
      data: newBeneficio,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateBeneficioById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, categoria_beneficio_id } = req.body;
    const updateBeneficio = await Beneficio.findOne({ where: { id } });
    if (!updateBeneficio)
      return res
        .status(404)
        .json({ message: 'Beneficio dont exists', data: {} });

    await updateBeneficio.update(
      { nombre, categoria_beneficio_id },
      { where: { id } }
    );
    res.json({
      message: 'Beneficio updated successfully',
      data: updateBeneficio,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteBeneficioById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBeneficio = await Beneficio.findOne({ where: { id } });
    if (!deleteBeneficio)
      return res
        .status(404)
        .json({ message: 'Beneficio dont exists', data: {} });

    await deleteBeneficio.destroy();
    res.json({ message: 'Beneficio deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};
