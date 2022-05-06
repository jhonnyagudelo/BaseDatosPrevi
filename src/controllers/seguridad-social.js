import SeguridadSocial from '../models/SeguridadSocial';

export const getSeguridadSocial = async (req, res) => {
  try {
    const seguridadSocial = await SeguridadSocial.findAll();
    if (!seguridadSocial.length > 0)
      res
        .status(400)
        .json({ message: 'SeguridadSocial dont exists', data: [] });

    res.json({
      message: 'SeguridadSocial find successfully',
      data: seguridadSocial,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [], err: e });
  }
};

export const getSeguridadSocialById = async (req, res) => {
  try {
    const { id } = req.params;
    const seguridadSocial = await SeguridadSocial.findOne({ where: { id } });
    if (!seguridadSocial)
      return res
        .status(404)
        .json({ message: 'SeguridadSocial dont exists', data: {} });

    res.json({
      message: 'SeguridadSocial find successfully',
      data: seguridadSocial,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const createSeguridadSocialById = async (req, res) => {
  try {
    const { nombre } = req.body;
    const newSeguridadSocial = await SeguridadSocial.create({ nombre });
    if (!newSeguridadSocial)
      return res.status(404).json({ message: 'SeguridadSocial dont exists' });

    res.json({
      message: 'SeguridadSocial created successfully',
      data: newSeguridadSocial,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateSeguridadSocialById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    const seguridadSocial = await SeguridadSocial.findOne({ where: { id } });
    if (!seguridadSocial)
      return res
        .status(404)
        .json({ message: 'SeguridadSocial dont exists', data: {} });

    await seguridadSocial.update({ nombre }, { where: { id } });
    res.json({
      message: 'SeguridadSocial updated successfully',
      data: seguridadSocial,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteSeguridadSocialById = async (req, res) => {
  try {
    const { id } = req.params;
    const seguridadSocial = await SeguridadSocial.findOne({ where: { id } });
    if (!seguridadSocial)
      return res
        .status(404)
        .json({ message: 'SeguridadSocial dont exists', data: [] });

    await seguridadSocial.destroy();
    res.json({
      message: 'SeguridadSocial deleted successfully',
      data: seguridadSocial,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [], err: e });
  }
};
