import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

class ContadorCupo extends Sequelize.Model {}

ContadorCupo.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cupo_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    valor_actual: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    referencia_cupo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    f_final: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("now () + INTERVAL '1 year'"),
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  {
    sequelize,
    modelName: 'contador_cupo',
    freezeTableName: true,
  }
);

export default ContadorCupo;
