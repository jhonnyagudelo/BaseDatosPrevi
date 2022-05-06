import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Cartera from './Cartera';
import DetallePago from './DetallePago';

class CarteraMovimiento extends Sequelize.Model {}

CarteraMovimiento.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cartera_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    naturaleza: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    nota_credito_id: {
      type: Sequelize.INTEGER,
    },
    detalle_pago_id: {
      type: Sequelize.INTEGER,
    },
    valor: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    concepto: {
      type: Sequelize.STRING,
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  {
    sequelize,
    modelName: 'c_movimiento',
    freezeTableName: true,
  }
);

Cartera.hasMany(CarteraMovimiento, {
  foreignKey: {
    name: 'cartera_id',
    allowNull: false,
  },
});

DetallePago.hasMany(CarteraMovimiento, {
  foreignKey: {
    name: 'detalle_pago_id',
    allowNull: false,
  },
});

CarteraMovimiento.belongsTo(Cartera, {
  foreignKey: {
    name: 'cartera_id',
  },
});

CarteraMovimiento.belongsTo(DetallePago, {
  foreignKey: {
    name: 'detalle_pago_id',
  },
});

export default CarteraMovimiento;
