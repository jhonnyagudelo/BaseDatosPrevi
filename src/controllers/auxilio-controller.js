import Auxilio from '../models/Auxilio';

export const getAuxilios = async (req, res) => {
  try {
    const auxilios = await Auxilio.findAll();
    if (!auxilios.length > 0)
      return res
        .status(404)
        .json({ message: 'Auxilios dont exists', data: [] });

    res.json({ message: 'Auxilios find successfully', data: auxilios });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [], err: e });
  }
};

export const getAuxilioById = async (req, res) => {
  try {
    const { id } = req.params;
    const auxilio = await Auxilio.findOne({ where: { id } });
    if (!auxilio)
      return res.status(404).json({ message: 'Auxilio dont exists', data: {} });

    res.json({ message: 'Auxilio find successfully', data: auxilio });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const createAuxilio = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const newAuxilio = await Auxilio.create({
      nombre,
      descripcion,
    });
    if (!newAuxilio)
      return res.status(404).json({ message: 'Auxilio dont create', data: {} });

    res.json({ message: 'Auxilio created successfully', data: newAuxilio });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateAuxilioById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, estado } = req.body;
    const updateAuxilio = await Auxilio.findOne({ where: { id } });
    if (!updateAuxilio)
      return res.status(404).json({ message: 'Auxilio dont exists', data: {} });

    await updateAuxilio.update(
      {
        nombre,
        descripcion,
        estado,
      },
      { where: { id } }
    );
    res.json({ message: 'Auxilio updated successfully', data: updateAuxilio });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteAuxilioById = async (req, res) => {
  try {
    const { id } = req.params;
    const auxilio = await Auxilio.findOne({ where: { id } });
    if (!auxilio)
      return res.status(404).json({ message: 'Auxilio dont exists', data: {} });

    await auxilio.destroy();
    res.json({ message: 'Auxilio deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};
