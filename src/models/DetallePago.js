import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import FormaPago from './FormaPago';
import configEnvi from '../config';

class DetallePago extends Sequelize.Model {}

DetallePago.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    forma_pago_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    valor: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      validate: {
        isNumeric: true,
        notNull: { msg: 'Por favor ingrese el valor a cancelar' },
      },
    },
    cupo: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        notNull: { msg: 'Por favor ingrese el numero del cupo' },
      },
    },
    imagen: {
      type: Sequelize.STRING,
    },
    n_usuario: {
      type: Sequelize.STRING,
    },
    n_registro: {
      type: Sequelize.STRING,
    },
    n_documento: {
      type: Sequelize.INTEGER,
      allowNull: false,
      //validate: {
      //isnumeric: true,
      //notnull: { msg: 'por favor ingrese el numero de cedula del cliente' },
      //},
    },
    n_cliente: {
      type: Sequelize.TEXT,
    },
    referencia_producto: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    prod_item: {
      type: Sequelize.INTEGER,
    },
    u_codigo: {
      type: Sequelize.INTEGER,
      validate: {
        isNumeric: true,
      },
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  {
    sequelize,
    modelName: 'detalle_pago',
  }
);

FormaPago.hasMany(DetallePago, {
  foreignKey: {
    name: 'forma_pago_id',
    allowNull: false,
  },
});

DetallePago.belongsTo(FormaPago, {
  foreignKey: {
    name: 'forma_pago_id',
  },
});

export const setImg = async (filename) => {
  try {
    if (filename)
      return `http://${configEnvi.host}:${configEnvi.port}/${filename}`;
  } catch (e) {
    console.log(e);
  }
};

export default DetallePago;
