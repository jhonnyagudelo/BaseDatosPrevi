import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Usuario from './Usuario';

class Premiacion extends Sequelize.Model {
}

Premiacion.init({
  n_premiacion: { type: Sequelize.INTEGER, allowNull: false },
  f_vencimiento: { type: Sequelize.DATE },
  estado: { type: Sequelize.STRING, defaultValue: 'activo' },
  created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
}, { sequelize, modelName: 'premiacion' });

Usuario.hasMany(Premiacion, { foreignKey: { name: 'usuario_id', allowNull: false } });
Premiacion.belongsTo(Usuario, { foreignKey: { name: 'usuario_id', allowNull: false } });

export default Premiacion;
