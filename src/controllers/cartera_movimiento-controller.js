import CarteraMovimiento from '../models/CarteraMovimiento';
import Cartera from '../models/Cartera';
import DetallePago from '../models/DetallePago';
import { sequelize } from '../database/database';
import { QueryTypes } from 'sequelize';
import { Op } from 'sequelize';

export const getCarteraMovimiento = async (req, res) => {
  try {
    const movimiento = await CarteraMovimiento.findAll({
      include: [
        {
          model: Cartera,
        },
        {
          model: DetallePago,
        },
      ],
    });
    if (!movimiento.length > 0)
      return res.status(404).json({
        message: 'Movimiento no encontrado',
        data: {},
      });
    res.json({
      message: 'Movimientos encontrados',
      data: movimiento,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const carteraByMovimiento = async (req, res) => {
  try {
    const { carteraId } = req.params;
    const movimiento = await CarteraMovimiento.findAll({
      includes: [
        {
          model: Cartera,
          atributes: [],
        },
        {
          model: DetallePago,
          atributes: [],
        },
      ],
      where: { cartera_id: { [Op.eq]: carteraId } },
      order: [['created_at', 'desc']],
    });
    if (!movimiento)
      return res.status(404).json({
        message: 'Cartera no existe',
        data: {},
      });
    return res.json({
      message: 'Cartera encontrada',
      data: movimiento,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const getHistorial = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await sequelize.query(
      'SELECT * FROM consultar_historia( ? )',
      {
        replacements: [id],
        type: QueryTypes.SELECT,
      }
    );
    res.json({
      message: 'resultado',
      data: result,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento',
      data: {},
      err: e,
    });
  }
};

export const getSaldo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await sequelize.query('SELECT * FROM consultar_saldo( ? )', {
      replacements: [id],
      type: QueryTypes.SELECT,
    });
    res.json({
      message: 'resultado',
      data: result,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento',
      data: {},
      err: e,
    });
  }
};
