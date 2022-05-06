import NegociacionEmpresa from '../models/NegociacionEmpresa';
import Empresa from '../models/Empresa';

export const getNegociacionEmpresas = async (req, res) => {
  try {
    const negociacionEmpresa = await NegociacionEmpresa.findAll({
      include: [{ model: Empresa }],
    });
    if (!negociacionEmpresa.length > 0)
      return res.status(404).json({
        message: 'NegociacionEmpresas dont exists',
        data: [],
      });

    res.json({
      message: 'NegociacionEmpresa find successfully',
      data: negociacionEmpresa,
    });
  } catch (e) {
    res.json({ message: 'Something goes wrong', data: [], err: e });
  }
};

export const getNegociacionEmpresaById = async (req, res) => {
  try {
    const { id } = req.params;
    const negociacionEmpresa = await NegociacionEmpresa.findOne({
      where: { id },
    });
    if (!negociacionEmpresa)
      return res
        .status(404)
        .json({ message: 'NegociacionEmpresa dont exists', data: {} });

    res.json({
      message: 'NegociacionEmpresa find successfully',
      data: negociacionEmpresa,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const createNegociacionEmpresa = async (req, res) => {
  try {
    const { detalle_negociacion, p_descuento, f_vencimiento, empresa_id } =
      req.body;
    const newNegociacionEmpresa = await NegociacionEmpresa.create(
      {
        detalle_negociacion,
        p_descuento,
        f_vencimiento,
        empresa_id,
      },
      {
        fields: [
          'detalle_negociacion',
          'p_descuento',
          'f_vencimiento',
          'empresa_id',
        ],
      }
    );
    if (!newNegociacionEmpresa)
      return res
        .status(404)
        .json({ message: 'NegociacionEmpresa dont create', data: {} });

    res.json({
      message: 'NegociacionEmpresa created successfully',
      data: newNegociacionEmpresa,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const updateNegociacionEmpresaById = async (req, res) => {
  try {
    const { id } = req.params;
    const { detalle_negociacion, p_descuento, f_vencimiento, empresa_id } =
      req.body;
    const updateNegociacionEmpresa = await NegociacionEmpresa.findOne({
      where: { id },
    });
    if (!updateNegociacionEmpresa)
      return res
        .status(404)
        .json({ message: 'NegociacionEmpresa dont exists', data: {} });

    await updateNegociacionEmpresa.update(
      {
        detalle_negociacion,
        p_descuento,
        f_vencimiento,
        empresa_id,
      },
      { where: { id } }
    );
    res.json({
      message: 'NegociacionEmpresa updated successfully',
      data: updateNegociacionEmpresa,
    });
  } catch (e) {
    res.status(500).json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

export const deleteNegociacionEmpresaById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteNegociacionEmpresa = await NegociacionEmpresa.findOne({
      where: { id },
    });
    if (!deleteNegociacionEmpresa)
      return res
        .status(404)
        .json({ message: 'NegociacionEmpresa dont exists', data: {} });

    await deleteNegociacionEmpresa.destroy();
    res.json({ message: 'NegociacionEmpresa deleted successfully', data: {} });
  } catch (e) {
    res.json({ message: 'Something goes wrong', data: {}, err: e });
  }
};

