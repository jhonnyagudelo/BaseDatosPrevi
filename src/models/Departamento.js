import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

class Departamento extends Sequelize.Model {
}

Departamento.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    codigo: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Este codigo ya existe en otro departamento'
      }
    },
    nombre: {
      type: Sequelize.STRING,
      validate: { len: { args: [0, 30], msg: 'Tamaño maximo es 30' } }
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
  },
  {
    undercore: true,
    sequelize,
    modelName: 'departamento',
    freezeTableName: true
  }
);

export default Departamento;
