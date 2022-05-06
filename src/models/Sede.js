import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

class Sede extends Sequelize.Model {}

Sede.init(
  {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { len: { len: { args: [0, 30], msg: 'Tamaño maximo es 30' } } },
    },
    acronimo: {
      type: Sequelize.STRING,
      validate: { len: { args: [0, 5], msg: 'Tamaño maximo es 5' } },
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  {
    sequelize,
    modelName: 'sede',
    freezeTableName: true,
  }
);

export default Sede;
