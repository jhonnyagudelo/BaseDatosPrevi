import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Departamento from './Departamento';

class Municipio extends Sequelize.Model {
}

Municipio.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    departamento_id: {
      type: Sequelize.INTEGER,
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
    underscored: true,
    sequelize,
    modelName: 'municipio',
    freezeTableName: true
  }
);

Departamento.hasMany(Municipio, {
  foreignKey: {
    name: 'departamento_id',
    allowNull: false
  }
});

Municipio.belongsTo(Departamento, {
  foreignKey: {
    name: 'departamento_id'
  }
});

export default Municipio;
