import PuntoBeneficio from '../models/PuntoBeneficio';

export const getPuntoBeneficios = async (req, res) => {
  try {
    const puntoBeneficios = await PuntoBeneficio.findAll();
    if (!puntoBeneficios.length > 0)
      return res
        .status(404)
        .json({ message: 'PuntoBeneficios dont exists', data: {} });

    res.json({
      message: 'PuntoBeneficios find successfully',
      data: puntoBeneficios,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const getPuntoBeneficioById = async (req, res) => {
  try {
    const { id } = req.params;
    const puntoBeneficio = await PuntoBeneficio.findOne({ where: { id } });
    if (!puntoBeneficio)
      return res
        .status(404)
        .json({ message: 'PuntoBeneficio dont exists', data: {} });

    res.json({
      message: 'PuntoBeneficio find successfully',
      data: puntoBeneficio,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const createPuntoBeneficio = async (req, res) => {
  try {
    const { descripcion } = req.body;
    const newPuntoBeneficio = await PuntoBeneficio.create(
      { descripcion },
      { fields: ['descripcion'] }
    );
    if (!newPuntoBeneficio)
      return res
        .status(404)
        .json({ message: 'PuntoBeneficio dont created', data: {} });

    res.json({
      message: 'PuntoBeneficio created successfully',
      data: newPuntoBeneficio,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updatePuntoBeneficioById = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion } = req.body;
    const updatePuntoBeneficio = await PuntoBeneficio.findOne({
      where: { id },
    });
    if (!updatePuntoBeneficio)
      res.status(404).json({ message: 'PuntoBeneficio dont exists' });

    await updatePuntoBeneficio.update({ descripcion }, { where: { id } });
    res.json({
      message: 'PuntoBeneficio updated successfully',
      data: updatePuntoBeneficio,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deletePuntoBeneficioById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePuntoBeneficio = await PuntoBeneficio.findOne({
      where: { id },
    });
    if (!deletePuntoBeneficio)
      return res
        .status(500)
        .json({ message: 'PuntoBeneficio dont exists', data: {} });

    await deletePuntoBeneficio.destroy();
    res.json({ message: 'PuntoBeneficio deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};
