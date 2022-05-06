import Origen from '../models/Origen';
import Sede from '../models/Sede';

export const getOrigenes = async (req, res) => {
  try {
    const origenes = await Origen.findAll({
      include: [{ model: Sede }],
    });
    if (!origenes.length > 0)
      return res.status(404).json({ message: 'Origin dont exists', data: [] });

    res.json({ message: 'Origenes find successfully', data: origenes });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [], err: e });
  }
};

export const getOrigenById = async (req, res) => {
  try {
    const { id } = req.params;
    const origen = await Origen.findOne({
      include: [{ model: Sede }],
      where: { id },
    });
    if (!origen)
      return res.status(404).json({ message: 'Origen dont exists', data: {} });

    res.json({ message: 'Origen find successfully', data: origen });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const createOrigen = async (req, res) => {
  try {
    const { nombre, sede_id } = req.body;
    const newOrigen = await Origen.create(
      { nombre, sede_id },
      { fields: ['nombre', 'sede_id'] }
    );
    if (!newOrigen)
      return res.status(404).json({ message: 'Origen dont created', data: {} });

    res.json({ message: 'Origen created successfully', data: newOrigen });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateOrigenById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    const updateOrigen = await Origen.findOne({ where: { id } });
    if (!updateOrigen)
      return res.status(404).json({ message: 'Origen dont exists', data: {} });

    await updateOrigen.update({ nombre }, { where: { id } });
    res.json({ message: 'Origen updated successfully', data: updateOrigen });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteOrigenById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteOrigen = await Origen.findOne({ where: { id } });
    if (!deleteOrigen)
      return res.status(404).json({ message: 'Origen dont exists', data: {} });

    await deleteOrigen.destroy();
    res.json({ message: 'Origen deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};
