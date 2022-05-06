import DiaPago from '../models/DiaPago';

export const getDiaPago = async (req, res) => {
  try {
    const dia_pago = await DiaPago.findAll();
    if (!dia_pago.length > 0)
      return res.status(404).json({
        message: 'dias de pago no existes',
        data: {},
      });
    res.json({
      message: 'Estos son los dias de pago',
      data: dia_pago,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const getDiaPagoById = async (req, res) => {
  try {
    const { id } = req.params;
    const dia_pago = await DiaPago.findOne({ where: { id } });
    if (!dia_pago)
      return res.status(404).json({
        message: 'este dia no existe',
        data: {},
      });
    res.json({
      message: 'El dia encontrado',
      data: dia_pago,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const createDiaPago = async (req, res) => {
  try {
    const { tiempo, descripcion, tiempo_extra } = req.body;
    const newDia = await DiaPago.create(
      {
        tiempo,
        descripcion,
        tiempo_extra,
      },
      {
        fields: ['tiempo', 'descripcion', 'tiempo_extra'],
      }
    );
    if (!newDia)
      return res.status(404).json({
        message: 'Nuevo dia de pago no creado',
        data: {},
      });
    res.json({
      message: 'Dia de pago creado',
      data: newDia,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const updateDiaById = async (req, res) => {
  try {
    const { id } = req.params;
    const { tiempo, descripcion, tiempo_extra, estado } = req.body;
    const updateDia = await DiaPago.findOne({
      where: { id },
    });
    if (!updateDia)
      return res.status(404).json({
        message: 'Dia no actualizado',
        data: {},
      });
    await updateDia.update(
      {
        tiempo,
        descripcion,
        tiempo_extra,
        estado,
      },
      { where: { id } }
    );
    res.json({
      message: ' Dia actualizado ',
      data: updateDia,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const deleteDia = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteD = await DiaPago.findOne({ where: { id } });
    if (!deleteD)
      return res.status(404).json({
        message: 'No existe',
        data: {},
      });
    await deleteD.destroy();
    res.json({
      message: 'Dia eliminado',
      data: deleteD,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};
