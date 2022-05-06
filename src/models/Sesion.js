import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Usuario from './Usuario';

class Sesion extends Sequelize.Model {
}

Sesion.init({
  f_inicio: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  f_final: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  estado: { type: Sequelize.STRING, defaultValue: 'activo' },
  created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
}, {
  sequelize,
  modelName: 'sesiones',
  freezeTableName: true
});

Usuario.hasMany(Sesion, { foreignKey: { name: 'usuario_id', allowNull: false } });
Sesion.belongsTo(Usuario, { foreignKey: { name: 'usuario_id', allowNull: false } });

export default Sesion;