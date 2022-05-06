import { QueryTypes } from 'sequelize';
import { sequelize } from '../database/database';
import DetallePago, { setImg } from '../models/DetallePago';
import FormaPago from '../models/FormaPago';
import { sendMail } from '../template/pagos-template';
export const getDetallePago = async (req, res) => {
  try {
    const detallePago = await DetallePago.findAll({
      include: { model: FormaPago },

      order: [['created_at', 'desc']],
    });
    if (!detallePago.length > 0)
      return res.status(404).json({
        message: 'Los pagos no existe',
        data: {},
      });
    res.json({
      message: 'Los pagos realizados',
      data: detallePago,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento',
      data: {},
      err: e,
    });
  }
};

export const getDetallePagoById = async (req, res) => {
  try {
    const { id } = req.params;
    const detallePago = await DetallePago.findOne({
      where: { id },
      include: { model: FormaPago },
      order: [['created_at', 'desc']],
    });
    if (!detallePago)
      return res.status(404).json({
        message: 'Pago no existe',
        data: {},
      });
    return res.json({
      message: 'Pago encontrado',
      data: detallePago,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento',
      data: {},
      err: e,
    });
  }
};

export const createDetallePago = async (req, res) => {
  try {
    const {
      recaudo,
      n_cupo,
      forma_pago,
      n_cedula,
      referencia,
      u_codigo,
      recibo,
    } = req.body;

    if (req.file !== undefined) req.recibo = await setImg(req.file.filename);
    const result = await sequelize.query(
      'SELECT * FROM f_detalle_pago (?,?,?,?,?,?,?)',
      {
        replacements: [
          recaudo,
          n_cupo,
          forma_pago,
          n_cedula,
          referencia,
          u_codigo,
          req.recibo || null,
        ],
        type: QueryTypes.SELECT,
      }
    );
    sendMail(n_cedula, recaudo, referencia, n_cupo);
    return res.json({
      message: 'funciono',
      data: result,
    });
  } catch (e) {
    res.status(500).json({
      message: 'lo siento',
      data: {},
      err: e,
    });
  }
};

export const updateDetallePagoById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      forma_pago_id,
      valor,
      cupo,
      imagen,
      n_usuario,
      n_registro,
      estado,
      n_documento,
      n_cliente,
      referencia_producto,
      prod_item,
      u_codigo,
    } = req.body;
    const updateDetallePago = await DetallePago.findOne({ where: { id } });
    if (!updateDetallePago)
      return res.status(404).json({
        message: 'Pago no existe',
        data: {},
      });
    await updateDetallePago.update(
      {
        forma_pago_id,
        valor,
        cupo,
        imagen,
        n_usuario,
        n_registro,
        estado,
        n_documento,
        n_cliente,
        referencia_producto,
        prod_item,
        u_codigo,
      },
      {
        where: { id },
      }
    );
    res.json({
      message: 'Pago actualizado',
      data: updateDetallePago,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento',
      data: {},
      err: e,
    });
  }
};
