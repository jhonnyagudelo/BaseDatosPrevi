import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

class Especie extends Sequelize.Model {}

Especie.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { len: { args: [0, 50], msg: 'Tamaño maximo es 50' } },
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  { sequelize, modelName: 'especie' }
);

export default Especie;
