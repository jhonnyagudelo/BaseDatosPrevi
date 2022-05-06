import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Especie from './Especie';
class Raza extends Sequelize.Model {}

Raza.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    especie_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    nombre: {
      type: Sequelize.STRING,
      validate: { len: { args: [0, 50], msg: 'Tamaño maximo es 50' } },
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  { sequelize, modelName: 'raza', freezeTableName: true }
);

Especie.hasMany(Raza, { foreignKey: { name: 'especie_id', allowNull: false } });
Raza.belongsTo(Especie, {
  foreignKey: { name: 'especie_id', allowNull: false },
});

export default Raza;
