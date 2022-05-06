import { sequelize } from '../database/database';
import { QueryTypes } from 'sequelize';
import Cartera from '../models/Cartera';
import Cupo from '../models/Cupo';

export const getCartera = async (req, res) => {
  try {
    const pageAsNumber = Number.parseInt(req.query.pageAsNumber);
    const sizeAsNumber = Number.parseInt(req.query.sizeAsNumber);
    let page = 0;
    if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
      page = pageAsNumber;
    }
    let size = 10;
    if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 10) {
      size = sizeAsNumber;
    }
    const cartera = await Cartera.findAll({
      include: {
        model: Cupo,
      },
      offset: page * size,
      limit: size,
      order: [['created_at', 'desc']],
    });
    if (!cartera.length > 0)
      return res.status(404).json({
        message: 'cartera no existe',
        data: {},
      });
    return res.json({
      message: 'carteras encontradas',
      data: cartera,
      totalPages: Math.ceil(cartera.count / size),
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const h = async (req, res) => {
  try {
    const result = await sequelize.query(
      'SELECT  c.*,cc.valor_actual,cc.referencia_cupo FROM cartera c INNER JOIN contador_cupo cc USING (cupo_id)',
      {
        type: QueryTypes.SELECT,
      }
    );
    return res.json({
      message: 'resultado',
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

export const getCarteraById = async (req, res) => {
  try {
    const { id } = req.params;
    const cartera = await Cartera.findOne({
      where: { id },
      include: {
        model: Cupo,
        attributes: {
          cupo_id,
          include: [
            [
              sequelize.literal(
                `(select cp.valor_actual from contador_cupo cp where cp.cupo_id = ${cupo_id})`
              ),
              'numero_consecutivo',
            ],
          ],
        },
      },
    });
    if (!cartera)
      return res.status(404).json({
        message: 'cartera no encontrada',
        data: {},
      });
    res.json({
      message: 'cartera encontrada',
      data: cartera,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};
