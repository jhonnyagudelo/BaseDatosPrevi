import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
class Componente extends Sequelize.Model {}

Componente.init(
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
    nombre: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    descripcion: {
      type: Sequelize.STRING,
      validate: { len: { args: [0, 300], msg: 'Tamaño maximo es 300' } },
    },

    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  {
    sequelize,
    modelName: 'componente',
    underscored: true,
    freezeTableName: true,
  }
);

export default Componente;
