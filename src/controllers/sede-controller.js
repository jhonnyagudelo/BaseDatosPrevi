import Sede from '../models/Sede';

export const getSedes = async (req, res) => {
  try {
    const sedes = await Sede.findAll();
    if (!sedes.length > 0)
      return res.status(404).json({ message: 'Sede dont exists', data: [] });

    res.json({
      message: 'Sedes find successfully',
      data: sedes,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};

export const getSedeById = async (req, res) => {
  try {
    const { id } = req.params;
    const sede = await Sede.findOne({
      where: {
        id,
      },
    });
    if (!sede)
      return res.status(404).json({ message: 'Sede dont exists', data: {} });

    res.json({
      message: 'Sede find successfully',
      data: sede,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};

export const createSede = async (req, res) => {
  try {
    const { nombre, acronimo } = req.body;
    const newSede = await Sede.create(
      { nombre, acronimo },
      { fields: ['nombre', 'acronimo'] }
    );
    if (!newSede)
      return res.status(404).json({ message: 'Sede dont created', data: {} });

    res.json({
      message: 'Sede created successfully',
      data: newSede,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};

export const updateSedeById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, acronimo, estado } = req.body;
    const updateSede = await Sede.findOne({
      where: { id },
    });
    if (!updateSede)
      return res.status(404).json({ message: 'Sede dont exist', data: {} });

    await updateSede.update(
      {
        nombre,
        acronimo,
        estado,
      },
      { where: { id } }
    );
    res.json({
      message: 'Sede updated successfully',
      data: updateSede,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};

export const deleteSedeById = async (req, res) => {
  try {
    const { id } = req.params;
    const sede = await Sede.findOne({ where: { id } });
    if (!sede) return res.status(404).json({ message: 'Sede dont exists' });

    await Sede.destroy({
      where: { id },
    });
    res.json({
      message: 'Sede deleted successfully',
      data: {},
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};
