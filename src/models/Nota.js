import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Objecion from './Objecion';
import Cupo from './Cupo';

class Nota extends Sequelize.Model {}

Nota.init(
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
    comentario: {
      type: Sequelize.STRING,
      validate: { len: { args: [0, 500], msg: 'Tamaño maximo es 500' } },
    },
    objecion_id: {
      type: Sequelize.INTEGER,
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  { sequelize, modelName: 'nota', freezeTableName: true }
);

Cupo.hasMany(Nota, { foreignKey: { name: 'cupo_id', allowNull: false } });
Nota.belongsTo(Cupo, { foreignKey: { name: 'cupo_id', allowNull: false } });

Objecion.hasMany(Nota, {
  foreignKey: { name: 'objecion_id', allowNull: false },
});
Nota.belongsTo(Objecion, {
  foreignKey: { name: 'objecion_id', allowNull: false },
});

export default Nota;
