import Empresa from '../models/Empresa';

export const getEmpresas = async (req, res) => {
  try {
    const empresas = await Empresa.findAll({
      order: [['created_at', 'desc']],
    });
    if (!empresas.length > 0)
      return res
        .status(404)
        .json({ message: 'Empresas dont exists', data: [] });

    res.json({ message: 'Empresas find successfully', data: empresas });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [], err: e });
  }
};

export const getEmpresaById = async (req, res) => {
  try {
    const { id } = req.params;
    const empresa = await Empresa.findOne({
      where: { id },
      order: [['created_at', 'desc']],
    });
    if (!empresa)
      return res.status(404).json({ message: 'Empresa dont exists', data: {} });

    res.json({ message: 'Empresa find successfully', data: empresa });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const createEmpresa = async (req, res) => {
  try {
    const {
      nombre,
      telefono,
      correo,
      c_personas,
      sucursal,
      rut,
      nit,
      camara_comercio,
      certificacion_bancaria,
      nombre_contacto,
      documento,
    } = req.body;
    const newEmpresa = await Empresa.create(
      {
        nombre,
        telefono,
        correo,
        c_personas,
        sucursal,
        rut,
        nit,
        camara_comercio,
        certificacion_bancaria,
        nombre_contacto,
        documento,
      },
      {
        fields: [
          'nombre',
          'telefono',
          'correo',
          'c_personas',
          'sucursal',
          'rut',
          'nit',
          'camara_comercio',
          'certificacion_bancaria',
          'nombre_contacto',
          'documento',
        ],
      }
    );
    if (!newEmpresa)
      return res.status(404).json({ message: 'Empresa dont created' });

    res.json({ message: 'Empresa created successfully', data: newEmpresa });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateEmpresaById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nombre,
      telefono,
      correo,
      c_personas,
      sucursal,
      rut,
      nit,
      camara_comercio,
      certificacion_bancaria,
      nombre_contacto,
      documento,
    } = req.body;
    const updateEmpresa = await Empresa.findOne({ where: { id } });
    if (!updateEmpresa)
      return res.status(404).json({ message: 'Empresa dont exists', data: {} });

    await updateEmpresa.update(
      {
        nombre,
        telefono,
        correo,
        c_personas,
        sucursal,
        rut,
        nit,
        camara_comercio,
        certificacion_bancaria,
        nombre_contacto,
        documento,
      },
      { where: { id } }
    );
    res.json({ message: 'Empresa updated successfully', data: updateEmpresa });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteEmpresa = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteEmpresa = await Empresa.findOne({ where: { id } });
    if (!deleteEmpresa)
      return res.status(404).json({ message: 'Empresa dont exists' });

    await deleteEmpresa.destroy();
    res.json({ message: 'Empresa deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};
