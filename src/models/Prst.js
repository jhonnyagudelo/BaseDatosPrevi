import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

class Prst extends Sequelize.Model {
}

Prst.init({
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { len: { args: [0, 200], msg: 'Tamaño maximo es 200' } }
  },
  acronimo: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { len: { args: [0, 10], msg: 'Tamaño maximo es 10 ' } }
  },
  estado: { type: Sequelize.STRING, defaultValue: 'activo' },
  created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
}, { sequelize, modelName: 'prst' });

export default Prst;