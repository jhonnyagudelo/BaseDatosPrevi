import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import CategoriaNota from './CategoriaNota';

class Objecion extends Sequelize.Model {}

Objecion.init(
  {
    descripcion: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { len: { args: [0, 500], msg: 'Tamaño maximo es 500' } },
    },
    categoria_nota_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  { sequelize, modelName: 'objecion', freezeTableName: true }
);

CategoriaNota.hasMany(Objecion, {
  foreignKey: { name: 'categoria_nota_id', allowNull: false },
});
Objecion.belongsTo(CategoriaNota, {
  foreignKey: { name: 'categoria_nota_id', allowNull: false },
});

export default Objecion;
