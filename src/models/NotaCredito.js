import { Sequelize } from 'sequelize';
import { sequelize } from '../database/database';

class NotaCredito extends Sequelize.Model {}

NotaCredito.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    valor: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      validate: {
        isNumeric: true,
        notNull: { msg: ' Por favor ingrese el valor a cancelar' },
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
    concepto: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    n_usuario: {
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
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },

  {
    sequelize,
    modelName: 'nota_credito',
  }
);

export default NotaCredito;
