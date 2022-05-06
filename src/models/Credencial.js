import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

class Credencial extends Sequelize.Model {
}

Credencial.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nombre: {
      type: Sequelize.STRING,
      validate: { len: { args: [0, 30], msg: 'Tamaño maximo es de 30' } }
    },
    descripcion: {
      type: Sequelize.STRING,
      validate: { len: { args: [0, 500], msg: 'Tamaño maximo es de 500' } }
    },
    tiempo: {
      type: Sequelize.INTEGER
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
  },
  {
    sequelize,
    modelName: 'credencial',
    freezeTableName: true
  }
);

export default Credencial;
