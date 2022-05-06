import EstadoBienestar from '../models/EstadoBienestar';
import EstadoCupo from '../models/EstadoCupo';

export const getEstadoBienestar = async (req, res) => {
  try {
    const estadoBienestar = await EstadoBienestar.findAll({ include: [{ model: EstadoCupo }] });
    if (!estadoBienestar.length > 0) return res.status(404).json({ message: 'EstadoBienestar dont exists', data: [] });

    res.json({ message: 'EstadoBienestar find successfully', data: estadoBienestar });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const getEstadoBienestarById = async (req, res) => {
  try {
    const { id } = req.params;
    const estadoBienestar = await EstadoBienestar.findOne({ include: [{ model: EstadoCupo }], where: { id } });
    if (!estadoBienestar) return res.status(404).json({ message: 'EstadoBienestar dont exists' });

    res.json({ message: 'EstadoBienestar find successfully', data: estadoBienestar });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const createEstadoBienestar = async (req, res) => {
  try {
    const { nombre, estado_cupo_id } = req.body;
    const newEstadoBienesta = await EstadoBienestar.create({
      nombre,
      estado_cupo_id
    }, { fields: ['nombre', 'estado_cupo_id'] });
    if (!newEstadoBienesta) return res.status(404).json({ message: 'EstadoBienestar dont created' });

    res.json({ message: 'EstadoBienestar created successfully', data: newEstadoBienesta });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateEstadoBienestarById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, estado_cupo_id } = req.body;
    const updateEstadoBienestar = await EstadoBienestar.findOne({ where: { id } });
    if (!updateEstadoBienestar) return res.status(404).json({ message: 'EstadoBienestar dont exists' });

    await updateEstadoBienestar.update({ nombre, estado_cupo_id }, { where: { id } });
    res.json({ message: 'EstadoBienestar updated successfully', data: updateEstadoBienestar });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteEstadoBienestarById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteEstadoBienestar = await EstadoBienestar.findOne({ where: { id } });
    if (!deleteEstadoBienestar) return res.status(404).json({ message: 'EstadoBienestar dont exists' });

    await deleteEstadoBienestar.destroy();
    res.json({ message: 'EstadoBienestar deleted succefully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wronh', data: {}, err: e });
  }
};