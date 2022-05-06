import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Referencia from './Referencia';
import PuntoBeneficio from './PuntoBeneficio';
import Beneficio from './Beneficio';

class Beneficio_has_punto extends Sequelize.Model {}

Beneficio_has_punto.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    beneficio_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    beneficio_punto_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    referencia_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  {
    sequelize,
    modelName: 'beneficio_has_punto',
    freezeTableName: true,
  }
);

Referencia.hasMany(Beneficio_has_punto, {
  foreignKey: {
    name: 'referencia_id',
    allowNull: false,
  },
});

Beneficio_has_punto.belongsTo(Referencia, {
  foreignKey: { name: 'referencia_id' },
});

PuntoBeneficio.hasMany(Beneficio_has_punto, {
  foreignKey: {
    name: 'beneficio_punto_id',
    allowNull: false,
  },
});

Beneficio_has_punto.belongsTo(PuntoBeneficio, {
  foreignKey: { name: 'beneficio_punto_id' },
});

Beneficio.hasMany(Beneficio_has_punto, {
  foreignKey: { name: 'beneficio_id', allowNull: false },
});

Beneficio_has_punto.belongsTo(Beneficio, {
  foreignKey: { name: 'beneficio_id' },
});

export default Beneficio_has_punto;
