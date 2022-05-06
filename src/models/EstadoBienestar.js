import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import EstadoCupo from './EstadoCupo';

class EstadoBienestar extends Sequelize.Model {
}

EstadoBienestar.init({
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { len: { args: [0, 100], msg: 'Tamaño maximo es 100' } }
  },
  estado: { type: Sequelize.STRING, defaultValue: 'activo' },
  created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
}, { sequelize, modelName: 'estado_bienestar' });

EstadoCupo.hasMany(EstadoBienestar, { foreignKey: { name: 'estado_cupo_id', allowNull: false } });
EstadoBienestar.belongsTo(EstadoCupo, { foreignKey: 'estado_cupo_id' });

export default EstadoBienestar;