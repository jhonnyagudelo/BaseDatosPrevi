import DetalleReferencia from '../models/DetalleReferencia';

export const getDetalleReferencias = async (req, res) => {
  try {
    const detalleReferencias = await DetalleReferencia.findAll();
    if (!detalleReferencias.length > 0)
      return res.status(404).json({
        message: 'DetalleReferencias dont exists',
        data: {},
      });

    res.json({
      message: 'DetalleReferencias find successfully',
      data: detalleReferencias,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: [], err: e });
  }
};

export const getDetalleReferenciaById = async (req, res) => {
  try {
    const { id } = req.params;
    const detalleReferencia = await DetalleReferencia.findOne({
      where: { id },
    });
    if (!detalleReferencia)
      return res
        .status(404)
        .json({ message: 'DetalleReferencia dont exists', data: {} });

    res.json({
      message: 'DetalleReferencia find successfully',
      data: detalleReferencia,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const createDetalleReferencia = async (req, res) => {
  try {
    const {
      valor_total,
      valor_inicial,
      valor_carnet,
      c_asegurado,
      c_mascota,
      aporte_adicional,
    } = req.body;
    const newDetalleReferencia = await DetalleReferencia.create(
      {
        valor_total,
        valor_inicial,
        valor_carnet,
        c_asegurado,
        c_mascota,
        aporte_adicional,
      },
      {
        fields: [
          'valor_total',
          'valor_inicial',
          'valor_carnet',
          'c_asegurado',
          'c_mascota',
          'aporte_adicional',
        ],
      }
    );
    if (!newDetalleReferencia)
      return res
        .status(404)
        .json({ message: 'DetalleReferencia dont created', data: {} });

    res.json({
      message: 'DetalleReferencia created successfully',
      data: newDetalleReferencia,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateDetalleReferenciaById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      valor_total,
      valor_inicial,
      valor_carnet,
      c_asegurado,
      c_mascota,
      aporte_adicional,
    } = req.body;
    const updateDetalleReferencia = await DetalleReferencia.findOne({
      where: { id },
    });
    if (!updateDetalleReferencia)
      return res
        .status(404)
        .json({ message: 'DetalleReferencia dont exists', data: {} });

    await updateDetalleReferencia.update(
      {
        valor_total,
        valor_inicial,
        valor_carnet,
        c_asegurado,
        c_mascota,
        aporte_adicional,
      },
      { where: { id } }
    );
    res.json({
      message: 'DetalleReferencia updated successfully',
      data: updateDetalleReferencia,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteDetalleReferenciaById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteDetalleReferencia = await DetalleReferencia.findOne({
      where: { id },
    });
    if (!deleteDetalleReferencia)
      return res
        .status(404)
        .json({ message: 'DetalleReferencia dont exists', data: {} });

    await deleteDetalleReferencia.destroy();
    res.json({ message: 'DetalleReferencia deleted successfully', data: {} });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};
