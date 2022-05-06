import DetalleCredencial from '../models/DetalleCredencial';
import Credencial from '../models/Credencial';
import Parentesco from '../models/Parentesco';
import Cupo from '../models/Cupo';
import Referencia from '../models/Referencia';
import * as path from 'path';
import * as fs from 'fs';
import { sequelize } from '../database/database';
import { QueryTypes } from 'sequelize';
import { exportacionCredencial } from '../libs/export-credenciales';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export const getDetalleCredencial = async (req, res) => {
  try {
    const detalle_credencial = await DetalleCredencial.findAll({
      include: [
        {
          model: Credencial,
        },
        {
          model: Parentesco,
        },
        {
          model: Cupo,
          include: [
            {
              model: Referencia,
            },
          ],
        },
      ],
      where: { impreso: 'f' },
      order: [
        [Cupo, Referencia, 'nombre'],
        [Credencial, 'nombre'],
        ['n_credencial'],
      ],
    });
    if (!detalle_credencial.length > 0)
      return res.status(404).json({
        message: 'detalle credencial no existe',
        data: {},
      });

    res.json({
      message: 'Credenciales encontradas',
      data: detalle_credencial,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const exportacionDatos = async (req, res) => {
  try {
    const { numero } = req.params;
    let result;
    if (numero == 'null') {
      result = await sequelize.query('SELECT * FROM exportacion_carnet()', {
        type: QueryTypes.SELECT,
      });
    } else {
      result = await sequelize.query('SELECT * FROM exportacion_carnet(?)', {
        replacements: [numero],
        type: QueryTypes.SELECT,
      });
    }
    let ids = [];
    let asegurado = [];
    let temporalCliente;
    result.forEach((item, index) => {
      if (item.cliente !== temporalCliente) {
        temporalCliente = item.cliente;
        asegurado.push({
          index,
          cliente: item.cliente,
          asegurado: [item.beneficiario],
        });
      } else {
        asegurado[asegurado.length - 1].asegurado = [
          ...asegurado[asegurado.length - 1].asegurado,
          item.beneficiario,
        ];
      }
    });
    temporalCliente = undefined;
    result.forEach((item, index) => {
      const {
        cupo,
        cliente,
        codigo,
        fecha_vencimiento,
        beneficiario,
        origen,
        barra,
        ciudad,
        barrio,
        estrato,
        celular,
        documento,
      } = item ?? {};
      if (temporalCliente !== cliente) {
        temporalCliente = cliente;
      } else {
        return;
      }
      ids.push(
        `CUPO:  ${cupo}|TIT:  ${cliente}|CODIGO:  ${codigo}|VENCE:  ${format(
          new Date(fecha_vencimiento),
          'MMM|/dd/|yyyy',
          { locale: es }
        )}|${
          beneficiario
            ? asegurado
                .find((element) => element.index === index)
                ?.asegurado.join('|')
            : cliente + ' Unico beneficiario'
        }||||${documento}|CIUDAD:  ${ciudad}|BARRIO:  ${barrio}|ESTRATO:  ${estrato}| ANTIGUEDAD: 00|ORIGEN VENTA:  ${origen}|${barra}|${documento}|${celular}`
      );
    });
    exportacionCredencial(`p.txt`, ids.join('\n'));
    const file = path.join(__dirname, '..', 'storage/credencial/p.txt');
    const data = fs.readFileSync(file, { encoding: 'utf-8' });
    res.json({
      message: 'Detalle de la credencial encontrados',
      mostrar: result,
      data: data,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo siento1',
      data: {},
      err: e,
    });
  }
};

export const getDetalleCredencialById = async (req, res) => {
  try {
    const { id } = req.params;
    const d_credencial = await DetalleCredencial.findOne({
      where: { id },
      include: [
        {
          model: Credencial,
        },
        {
          model: Parentesco,
        },
        {
          model: Cupo,
        },
      ],
    });
    if (!d_credencial)
      return res.status(404).json({
        message: 'la credencial no tiene detalles',
        data: {},
      });
    res.json({
      message: 'Detalle de la credencial encontrados',
      data: d_credencial,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const createDetalleCredencial = async (req, res) => {
  try {
    const {
      credencial_id,
      cupo_id,
      parentesco_id,
      entregado,
      n_credencial,
      delegado,
      nom_recibe,
      f_vencimiento,
      f_compra,
      n_documento,
      u_codigo,
    } = req.body;
    const newDetalleCredencial = await DetalleCredencial.create(
      {
        credencial_id,
        cupo_id,
        parentesco_id,
        entregado,
        n_credencial,
        delegado,
        nom_recibe,
        f_vencimiento,
        f_compra,
        n_documento,
        u_codigo,
      },
      {
        fields: [
          'credencial_id',
          'cupo_id',
          'parentesco_id',
          'entregado',
          'n_credencial',
          'delegado',
          'nom_recibe',
          'f_vencimiento',
          'f_compra',
          'n_documento',
          'u_codigo',
        ],
      }
    );
    return res.json({
      message: 'Detalle de la credencial ha sido creado',
      date: newDetalleCredencial,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const updateDetalleCredencialById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      parentesco_id,
      entregado,
      n_credencial,
      delegado,
      nom_recibe,
      f_vencimiento,
      f_compra,
      n_documento,
      u_codigo,
      estado,
    } = req.body;
    const updateDetalleCredencial = await DetalleCredencial.findOne({
      where: { id },
    });
    if (!updateDetalleCredencial)
      return res.status(404).json({
        message: 'Detalle',
        data: {},
      });

    await updateDetalleCredencial.update(
      {
        parentesco_id,
        entregado,
        n_credencial,
        delegado,
        nom_recibe,
        f_vencimiento,
        f_compra,
        n_documento,
        u_codigo,
        estado,
      },
      {
        where: { id },
      }
    );
    res.json({
      message: 'Detalle de la credencial actualizado',
      data: updateDetalleCredencial,
    });
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};

export const deleteDetalleCredencial = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteDetalle = await DetalleCredencial.findOne({ where: { id } });
    if (deleteDetalle) {
      await deleteDetalle.destroy();
      res.json({
        message: 'Eliminado el detalle',
        data: deleteDetalle,
      });
    } else {
      res.status(404).json({
        message: 'No existe',
      });
    }
  } catch (e) {
    res.status(500).json({
      message: 'Lo sentimos',
      data: {},
      err: e,
    });
  }
};
