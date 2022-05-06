import Prst from '../models/Prst';

export const getPrsts = async (req, res) => {
  try {
    const prsts = await Prst.findAll();
    if (!prsts.length > 0) return res.status(404).json({ message: 'Prsts dont exists', data: [] });

    res.json({ message: 'Prsts find successfully', data: prsts });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [], err: e });
  }
};

export const getPrstById = async (req, res) => {
  try {
    const { id } = req.params;
    const prst = await Prst.findOne({ where: { id } });
    if (!prst) return res.status(404).json({ message: 'Prst dont exists', data: {} });

    res.json({ message: 'Prst find successfully', data: prst });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};


export const createPrst = async (req, res) => {
  try {
    const { nombre, acronimo } = req.body;
    const newPrst = await Prst.create({ nombre, acronimo }, { fields: ['nombre', 'acronimo'] });
    if (!newPrst) return res.status(404).json({ message: 'Prst dont created', data: {} });

    res.json({ message: 'Prst created successfully', data: newPrst });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updatePrstById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, acronimo } = req.body;
    const updatePrst = await Prst.findOne({ where: { id } });
    if (!updatePrst) return res.status(404).json({ message: 'Prst dont exists', data: {} });

    await updatePrst.update({ nombre, acronimo }, { where: { id } });
    res.json({ message: 'Prst updated successfully', data: updatePrst });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deletePrstById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePrst = await Prst.findOne({ where: { id } });
    if (!deletePrst) return res.status(404).json({ message: 'Prst dont exists', data: {} });

    await deletePrst.destroy();
    res.json({ message: 'Prst deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};