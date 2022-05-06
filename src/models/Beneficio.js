import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import CategoriaBeneficio from './CategoriaBeneficio';

class Beneficio extends Sequelize.Model {
}

Beneficio.init(
  {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { len: { args: [0, 200], msg: 'Tamaño maximo es 200' } }
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
  },
  { sequelize, modelName: 'beneficio' }
);

CategoriaBeneficio.hasMany(Beneficio, {
  foreignKey: { name: 'categoria_beneficio_id', allowNull: false }
});
Beneficio.belongsTo(CategoriaBeneficio, {
  foreignKey: { name: 'categoria_beneficio_id', allowNull: false }
});

export default Beneficio;

