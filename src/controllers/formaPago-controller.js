import FormaPago from '../models/FormaPago';

export const getFormaPago = async (req, res) => {
  try {
    const forma_pago = await FormaPago.findAll();
    if (!forma_pago.length > 0)
      return res.status(404).json({
        message: 'forma de pago no existe',
        data: {},
      });
    res.json({
      message: 'forma de pago',
      data: forma_pago,
    });
  } catch (e) {
    res.status(500),
      json({
        message: 'Lo sentimos',
        data: {},
        err: e,
      });
  }
};

export const getFormaPagoById = async (req, res) => {
  try {
    const { id } = req.params;
    const forma_pago = await FormaPago.findOne({ where: { id } });
    if (!forma_pago)
      return res.status(404).json({
        message: 'forma de pago no encontrada',
        data: {},
      });
    res.json({
      message: 'forma de pago',
      data: forma_pago,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const createFormaPago = async (req, res) => {
  try {
    const { nombre } = req.body;
    const newFormaPago = await FormaPago.create(
      { nombre },
      { fields: ['nombre'] }
    );
    return res.json({
      message: 'Forma de pago creada',
      data: newFormaPago,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const updateFormaPagoById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, estado } = req.body;
    const updateFormaPago = await FormaPago.findOne({ where: { id } });

    if (!updateFormaPago)
      return res.status(404).json({
        message: 'El barrio no existe',
        data: {},
      });
    await updateFormaPago.update({ nombre, estado }, { where: { id } });
    res.json({
      message: 'Se actualizo',
      data: updateFormaPago,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const deleteFormaPagoById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteformaPago = await FormaPago.findOne({ where: { id } });
    if (deleteformaPago) {
      await FormaPago.destroy({ where: { id } });
      res.json({
        message: 'forma de pago eliminada',
        data: deleteformaPago,
      });
    } else {
      res.status(404).json({ message: ' no existe', data: {} });
    }
  } catch (e) {
    res.json({
      message: 'Lo sentimos no se pudo eliminar',
      data: {},
      err: e,
    });
  }
};
