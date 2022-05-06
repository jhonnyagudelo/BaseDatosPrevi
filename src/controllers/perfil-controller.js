import Perfil from '../models/Perfil';

export const getPerfiles = async (req, res) => {
  try {
    const perfiles = await Perfil.findAll();
    if (!perfiles.length > 0)
      return res
        .status(404)
        .json({ message: 'Perfiles dont exists', data: [] });

    return res.json({
      message: 'Perfiles find successfully',
      data: perfiles
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: [],
      err: e
    });
  }
};

export const getPerfilById = async (req, res) => {
  try {
    const { id } = req.params;
    const perfil = await Perfil.findOne({
      where: { id }
    });
    if (!perfil) return res.status(404).json({ message: 'Perfil dont exists', data: {} });
    return res.json({
      message: 'Perfil find successfully',
      data: perfil
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e
    });
  }
};

export const createPerfil = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const newPerfil = await Perfil.create(
      {
        nombre,
        descripcion
      },
      {
        fields: ['nombre', 'descripcion']
      }
    );
    return res.json({
      message: 'perfil created successfully',
      data: newPerfil
    });
  } catch (e) {
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
      err: e
    });
  }
};

export const updatePerfilById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    const updatePerfil = await Perfil.findOne({ where: { id } });
    if (!updatePerfil) return res.status(404).json({ message: 'Perfil dont exists' });

    await updatePerfil.update({ nombre, descripcion }, { where: { id } });
    return res.json({
      message: 'Perfil updated successfully',
      data: updatePerfil
    });

  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deletePerfilById = async (req, res) => {
  try {
    const { id } = req.params;
    const perfil = await Perfil.findOne({ where: { id } });
    if (perfil) {
      await perfil.destroy();
      res.json({
        message: 'Perfil deleted successfully'
      });
    } else {
      res.status(404).json({
        message: 'Perfil dont exists'
      });
    }
  } catch (e) {
    res.json({
      message: 'Something goes wrong',
      data: {},
      err: e
    });
  }
};
