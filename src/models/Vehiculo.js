import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import DetalleUsuario from './DetalleUsuario';

class Vehiculo extends Sequelize.Model {
}

Vehiculo.init({
  f_soat: { type: Sequelize.DATE, allowNull: false },
  f_tecnicomecanica: { type: Sequelize.DATE, allowNull: false },
  placa_vehiculo: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { len: { args: [0, 15], msg: 'Tamaño maximo es 15' } }
  },
  vehiculo: Sequelize.STRING,
  estado: { type: Sequelize.STRING, defaultValue: 'activo' },
  created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
}, { sequelize, modelName: 'vehiculo', freezeTableName: true });

DetalleUsuario.hasMany(Vehiculo, { foreignKey: { name: 'detalle_usuario_id', allowNull: false } });
Vehiculo.belongsTo(DetalleUsuario, { foreignKey: { name: 'detalle_usuario_id', allowNull: false } });

export default Vehiculo;