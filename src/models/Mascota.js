import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Raza from './Raza';
import Cupo from './Cupo';

class Mascota extends Sequelize.Model {}

Mascota.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cupo_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    raza_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    nombre: { type: Sequelize.STRING, allowNull: false },
    genero: { type: Sequelize.STRING, allowNull: false },
    color: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { len: { args: [0, 50], msg: 'Tamaño maximo es 50' } },
    },
    edad: { type: Sequelize.INTEGER, allowNull: false },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  { sequelize, modelName: 'mascota', freezeTableName: true }
);

Cupo.hasMany(Mascota, { foreignKey: { name: 'cupo_id', allowNull: false } });
Mascota.belongsTo(Cupo, { foreignKey: { name: 'cupo_id', allowNull: false } });

Raza.hasMany(Mascota, { foreignKey: { name: 'raza_id', allowNull: false } });
Mascota.belongsTo(Raza, { foreignKey: { name: 'raza_id', allowNull: false } });

export default Mascota;
