import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Zona from './Zona';

class Comuna extends Sequelize.Model {}

Comuna.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    zona_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: Sequelize.STRING,
      validate: { len: { args: [0, 30], msg: 'Tamaño maximo es 30' } },
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  {
    sequelize,
    modelName: 'comuna',
    freezeTableName: true,
  }
);

Zona.hasMany(Comuna, {
  foreignKey: {
    name: 'zona_id',
    allowNull: false,
  },
});

Comuna.belongsTo(Zona, {
  foreignKey: {
    name: 'zona_id',
  },
});

export default Comuna;
