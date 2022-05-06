import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

class DiaPago extends Sequelize.Model {}

DiaPago.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tiempo: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    descripcion: {
      type: Sequelize.STRING,
    },
    tiempo_extra: {
      type: Sequelize.INTEGER,
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  {
    sequelize,
    modelName: 'dia_pago',
    freezeTableName: true,
  }
);

export default DiaPago;
