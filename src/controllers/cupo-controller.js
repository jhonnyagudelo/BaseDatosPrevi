import { sequelize } from '../database/database';
import { QueryTypes } from 'sequelize';

import Cliente from '../models/Cliente';
import Referencia from '../models/Referencia';
import Empresa from '../models/Empresa';
import DiaPago from '../models/DiaPago';
import Cupo from '../models/Cupo';
import EstadoCupo from '../models/EstadoCupo';
import Barrio from '../models/Barrio';
import SeguridadSocial from '../models/SeguridadSocial';
import Comuna from '../models/Comuna';
import Zona from '../models/Zona';

export const getExperimento = async (req, res) => {
  try {
    const cupo = await sequelize.query(
      'SELECT c.*' +
        ' ,cc.valor_actual' +
        ' ,c_l.primer_nombre' +
        ' ,c_l.segundo_nombre' +
        ' ,c_l.primer_apellido' +
        ' ,c_l.segundo_apellido' +
        ' ,r_f.nombre AS referencia' +
        ' ,dp.tiempo' +
        ' ,e.nombre AS empresa' +
        ' ,e_c.nombre AS estado_cupo' +
        ' FROM cupo c' +
        ' INNER JOIN contador_cupo cc' +
        ' ON c.id = cc.cupo_id' +
        ' INNER JOIN cliente c_l' +
        ' ON c.cliente_id = c_l.id' +
        ' INNER JOIN referencia r_f' +
        ' ON r_f.id = c.referencia_id' +
        ' INNER JOIN dia_pago dp' +
        ' ON dp.id = c.dia_pago_id' +
        ' INNER JOIN estado_cupo e_c' +
        ' ON e_c.id = c.estado_cupo_id' +
        ' LEFT JOIN empresa e' +
        ' ON e.id = c.empresa_id' +
        ' WHERE TRUE;',
      {
        type: QueryTypes.SELECT,
      }
    );
    res.json({
      message: 'resultado',
      data: cupo,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento',
      data: {},
      err: e,
    });
  }
};

export const getCupo = async (req, res) => {
  try {
    const cupo = await Cupo.findAll({
      include: [
        {
          model: Cliente,
          include: [
            { model: Barrio, attributes: ['nombre', 'estrato'] },
            { model: SeguridadSocial, attributes: ['nombre'] },
          ],
        },
        {
          model: Referencia,
        },
        {
          model: Empresa,
        },
        {
          model: DiaPago,
        },
        {
          model: EstadoCupo,
        },
      ],
      order: [['created_at', 'desc']],
    });
    if (!cupo.length > 0)
      return res.status(404).json({
        message: 'El cupo no existe',
        data: {},
      });
    return res.json({
      message: 'Cupo encontrado',
      data: cupo,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento',
      data: {},
      err: e,
    });
  }
};

export const getCupoByid = async (req, res) => {
  try {
    const { id } = req.params;
    const cupo = await Cupo.findOne({
      where: { id },
      include: [
        {
          model: Cliente,
          include: [
            {
              model: Barrio,
              attributes: ['nombre', 'estrato'],
              include: [
                {
                  model: Comuna,
                  attributes: ['nombre'],
                  include: [{ model: Zona, attributes: ['nombre'] }],
                },
              ],
            },
            { model: SeguridadSocial, attributes: ['nombre'] },
          ],
        },
        {
          model: Referencia,
        },
        {
          model: Empresa,
        },
        {
          model: DiaPago,
        },
        {
          model: EstadoCupo,
        },
      ],
      order: [['created_at', 'desc']],
    });
    if (!cupo)
      return res.status(404).json({
        message: 'Cupo no existe',
        data: {},
      });
    return res.json({
      message: 'Cupo encontrado',
      data: cupo,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento',
      data: {},
      err: e,
    });
  }
};

export const createCupo = async (req, res) => {
  try {
    const {
      cliente,
      protege,
      referencia,
      dia_pago,
      direccion_c,
      m_transporte,
      control_sistema,
      bono_fidelidad,
      bono_pronto_pago,
      empresa,
    } = req.body;
    const result = await sequelize.query(
      'SELECT registrar_cupo(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      {
        replacements: [
          cliente,
          protege,
          referencia,
          dia_pago,
          direccion_c,
          m_transporte,
          control_sistema !== null && control_sistema !== ''
            ? control_sistema
            : null,
          bono_fidelidad !== null && bono_fidelidad !== ''
            ? bono_fidelidad
            : null,
          bono_pronto_pago !== null && bono_pronto_pago !== ''
            ? bono_pronto_pago
            : null,
          empresa !== null && empresa !== '' ? empresa : null,
        ],
        type: QueryTypes.SELECT,
      }
    );
    res.json({
      message: 'resultado',
      data: result,
    });
    res.end();
  } catch (e) {
    res.status(500).json({
      message: 'lo siento',
      data: {},
      err: e,
    });
  }
};

export const updateCupoById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      estado_cupo_id,
      dia_pago_id,
      direccion_cobro,
      control_sistema,
      bono_fidelidad,
      bono_pronto_pago,
      premiacion,
      descripcion,
      finanzas,
      gestor,
      bienestar,
      estado,
      cod_gestor,
    } = req.body;
    const updateCupo = await Cupo.findOne({ where: { id } });
    if (!updateCupo)
      return res.status(404).json({
        message: 'Cupo no existe',
        data: {},
      });
    await updateCupo.update(
      {
        estado_cupo_id,
        dia_pago_id,
        direccion_cobro,
        control_sistema,
        bono_fidelidad,
        bono_pronto_pago,
        premiacion,
        descripcion,
        finanzas,
        gestor,
        bienestar,
        estado,
        cod_gestor,
      },
      {
        where: { id },
      }
    );
    res.json({
      message: 'Cupo actalizado',
      data: updateCupo,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento',
      data: {},
      err: e,
    });
  }
};

//export const deleteCupoById = async (req, res) => {
//try {
//const { id } = req.params;
//const deleteCupo = await Cupo.findOne({ where: { id } });
//if (deleteCupo) {
//await deleteCupo.destroy();
//res.json({
//message: 'Cupo eliminado',
//data: deleteCupo,
//});
//} else {
//res.status(404).json({
//message: 'No existe',
//});
//}
//} catch (e) {
//res.status(500).json({
//message: 'Lo sentimos',
//data: {},
//err: e,
//});
//}
//};
//
//
//
