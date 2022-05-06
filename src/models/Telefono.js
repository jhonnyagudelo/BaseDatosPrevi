import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import DetalleUsuario from './DetalleUsuario';
import Cliente from './Cliente';
import ReferenciaFamiliar from './ReferenciaFamiliar';
class Telefono extends Sequelize.Model {}

Telefono.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    detalle_usuario_id: { type: Sequelize.INTEGER },
    referencia_familiar_id: { type: Sequelize.INTEGER },
    cliente_id: { type: Sequelize.INTEGER },
    tipo_telefono: { type: Sequelize.STRING, unique: true, allowNull: false },
    numero: {
      type: Sequelize.INTEGER,
      validate: { isNumeric: true, len: [7, 12] },
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  { underscored: true, sequelize, modelName: 'telefono', freezeTableName: true }
);

DetalleUsuario.hasMany(Telefono, {
  foreignKey: { name: 'detalle_usuario_id' },
});
Telefono.belongsTo(DetalleUsuario, {
  foreignKey: { name: 'detalle_usuario_id' },
});

Cliente.hasMany(Telefono, {
  foreignKey: { name: 'cliente_id' },
});

Telefono.belongsTo(Cliente, { foreignKey: { name: 'cliente_id' } });

ReferenciaFamiliar.hasMany(Telefono, {
  foreignKey: { name: 'referencia_familiar_id' },
});

Telefono.belongsTo(ReferenciaFamiliar, {
  foreignKey: { name: 'referencia_familiar_id' },
});

export default Telefono;
