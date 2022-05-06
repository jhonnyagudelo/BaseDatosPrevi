import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Comuna from './Comuna';

class Barrio extends Sequelize.Model {
}

Barrio.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    comuna_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    estrato: {
      type: Sequelize.INTEGER,
      validate: {
        isNumeric: { args: [true], msg: 'Ingresar solo numeros' },
        len: { args: [1], msg: 'Por favor ingresar numero del 1 al 6' }
      }
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { len: { args: [0, 30], msg: 'Tamaño maximo es 30' } }
    },
    tipo_zona: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { len: { args: [0, 30], msg: 'Tamaño maximo es 30' } }
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
  },
  {
    sequelize,
    modelName: 'barrio',
    freezeTableName: true
  }
);

Comuna.hasMany(Barrio, {
  foreignKey: {
    name: 'comuna_id',
    allowNull: false
  }
});

Barrio.belongsTo(Comuna, {
  foreignKey: {
    name: 'comuna_id'
  }
});

export default Barrio;
