import Permiso from '../models/Permiso';

export const getPermiso = async (req, res) => {
  try {
    const permiso = await Permiso.findAll({
      include: { model: Permiso },
    });
    if (!permiso.length > 0)
      return res.status(404).json({ message: 'permiso dont exists', data: [] });

    return res.json({
      message: 'permiso find successfully',
      data: permiso,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: [],
      err: e,
    });
  }
};

export const getPermisoById = async (req, res) => {
  try {
    const { id } = req.params;
    const permiso = await Permiso.findOne({
      where: { id },
      include: { model: Permiso },
    });
    return res.json({
      message: 'Permiso find successfully',
      data: permiso,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};

export const createPermiso = async (req, res) => {
  try {
    const { permiso_padre_id, componente_id, nombre, descripcion } = req.body;
    const newPermiso = await Permiso.create(
      { permiso_padre_id, componente_id, nombre, descripcion },
      { fields: ['permiso_padre_id', componente_id, 'nombre', 'descripcion'] }
    );
    return res.json({
      message: 'Permiso created successfully',
      data: newPermiso,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};

export const updatePermisoById = async (req, res) => {
  try {
    const { id } = req.params;
    const { permiso_padre_id, componente_id, nombre, descripcion, estado } =
      req.body;
    const updatePermiso = await Permiso.findOne({ where: { id } });
    if (!updatePermiso)
      return res.json({ message: 'Permiso dont exists', data: {} });

    await updatePermiso.update(
      { permiso_padre_id, componente_id, nombre, descripcion, estado },
      { where: { id } }
    );
    return res.json({
      message: 'Permiso updated successfully',
      data: updatePermiso,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e,
    });
  }
};

export const deletePermisoById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletePermiso = await Permiso.findOne({
      where: { id },
    });

    if (!deletePermiso)
      return res.status(404).json({ message: 'Permiso dont exists', data: {} });

    await deletePermiso.destroy();

    res.json({ message: 'Permiso deleted successfully', data: {} });
  } catch (e) {
    res.json({ message: 'Something goes wrong', data: {}, err: e });
  }
};
