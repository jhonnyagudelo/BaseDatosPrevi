import Referencia from '../models/Referencia';
import DetalleReferencia from '../models/DetalleReferencia';
import Producto from '../models/Producto';
import { Op } from 'sequelize';

export const getReferencia = async (req, res) => {
  try {
    const referencia = await Referencia.findAll({
      include: [
        {
          model: DetalleReferencia,
        },
        {
          model: Producto,
        },
      ],
    });
    if (!referencia.length > 0)
      return res.status(404).json({
        message: 'Referencia no existe',
        data: {},
      });
    return res.json({
      message: 'Referencia encontrados',
      data: referencia,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se encontro',
      data: {},
      err: e,
    });
  }
};

export const referenciaByProducto = async (req, res) => {
  try {
    const { productoId } = req.params;
    const referenciaByProductoId = await Referencia.findAll({
      include: [
        {
          model: DetalleReferencia,
        },
        {
          model: Producto,
        },
      ],
      where: { producto_id: { [Op.eq]: productoId } },
    });
    if (!referenciaByProductoId)
      return res.status(404).json({
        message: 'Referencia no existe',
        data: {},
      });
    return res.json({
      message: 'Referencia encontrada',
      data: referenciaByProductoId,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const getReferenciaById = async (req, res) => {
  try {
    const { id } = req.params;
    const referencia = await Referencia.findOne({
      where: { id },
      include: [
        {
          model: DetalleReferencia,
        },
        {
          model: Producto,
        },
      ],
    });
    if (!referencia)
      return res.status(404).json({
        message: 'Referencia no encontrada',
        data: {},
      });
    res.json({
      message: 'referencia encontrado',
      data: referencia,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos no se encontro',
      data: {},
      err: e,
    });
  }
};

export const createReferencia = async (req, res) => {
  try {
    const {
      detalle_referencia_id,
      nombre,
      r_numero,
      producto_id,
      prod_item,
      contador_inicial,
      contador_final,
    } = req.body;
    const newReferencia = await Referencia.create(
      {
        detalle_referencia_id,
        nombre,
        r_numero,
        producto_id,
        prod_item,
        contador_inicial,
        contador_final,
      },
      {
        fields: [
          'detalle_referencia_id',
          'nombre',
          'r_numero',
          'producto_id',
          'prod_item',
          'contador_inicial',
          'contador_final',
        ],
      }
    );
    return res.json({
      message: 'Referencia creada',
      data: newReferencia,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const updateReferenciaById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      detalle_referencia_id,
      nombre,
      r_numero,
      producto_id,
      prod_item,
      contador_inicial,
      contador_final,
      estado,
    } = req.body;
    const updateReferencia = await Referencia.findOne({ where: { id } });
    if (!updateReferencia)
      return res.status(404).json({
        message: 'Referencia no existe',
        data: {},
      });
    await updateReferencia.update(
      {
        detalle_referencia_id,
        nombre,
        r_numero,
        producto_id,
        prod_item,
        contador_inicial,
        contador_final,
        estado,
      },
      {
        where: { id },
      }
    );

    res.json({
      message: 'Referencia actualizada',
      data: updateReferencia,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const deleteReferenciaById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteReferencia = await Referencia.findOne({ where: { id } });
    if (!deleteReferencia)
      return res.status(404).json({
        message: 'Referencia no existe',
        data: {},
      });
    await deleteReferencia.destroy();
    res.json({
      message: 'Referencia Eliminada',
      data: deleteReferencia,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};
