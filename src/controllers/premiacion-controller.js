import Premiacion from '../models/Premiacion';
import Usuario from '../models/Usuario';

export const getPremiaciones = async (req, res) => {
  try {
    const premiaciones = await Premiacion.findAll({
      include: [{ model: Usuario }],
    });
    if (!premiaciones.length > 0)
      return res
        .status(404)
        .json({ message: 'Premiaciones dont exists', data: [] });

    res.json({ message: 'Premiaciones find successfully', data: premiaciones });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [], err: e });
  }
};

export const getPremiacionById = async (req, res) => {
  try {
    const { id } = req.params;
    const premiacion = await Premiacion.findOne({
      include: [{ model: Usuario }],
      where: { id },
    });
    if (!premiacion)
      return res.status(404).json({ message: 'Premiacion dont exists' });

    res.json({ message: 'Premiacion find successfully', data: premiacion });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const createPremiacion = async (req, res) => {
  try {
    const { n_premiacion, f_vencimiento, usuario_id } = req.body;
    const newPremiacion = await Premiacion.create(
      {
        n_premiacion,
        f_vencimiento,
        usuario_id,
      },
      { fields: ['n_premiacion', 'f_vencimiento', 'usuario_id'] }
    );
    if (!newPremiacion)
      return res.status(404).json({ message: 'Premiacion dont created' });

    res.json({
      message: 'Premiacion created successfully',
      data: newPremiacion,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', dat: {}, err: e });
  }
};

export const updatePremiacionById = async (req, res) => {
  try {
    const { id } = req.params;
    const { n_premiacion, f_vencimiento, usuario_id } = req.body;
    const updatePremiacion = await Premiacion.findOne({ where: { id } });
    if (!updatePremiacion)
      return res
        .status(404)
        .json({ message: 'Premiacion dont exists', data: {} });

    await updatePremiacion.update(
      {
        n_premiacion,
        f_vencimiento,
        usuario_id,
      },
      { where: id }
    );
    res.json({
      message: 'Premiacion updated successfully',
      data: updatePremiacion,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deletePremiacionById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePremiacion = await Premiacion.findOne({ where: { id } });
    if (!deletePremiacion)
      return res.status(404).json({ message: 'Premiacion dont exists' });

    await deletePremiacion.destroy();
    res.json({ message: 'Premiacion deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};
