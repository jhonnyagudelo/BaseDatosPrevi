import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Perfil from './Perfil';
import Usuario from './Usuario';
class PerfilUsuario extends Sequelize.Model {}

PerfilUsuario.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    usuario_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    perfil_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  {
    sequelize,
    modelName: 'usuario_has_perfil',
    underscored: true,
    freezeTableName: true,
  }
);

Usuario.belongsToMany(Perfil, {
  through: { model: PerfilUsuario, unique: false },
  foreignKey: 'usuario_id',
});
Perfil.belongsToMany(Usuario, {
  through: { model: PerfilUsuario, unique: false },
  foreignKey: 'perfil_id',
});

export default PerfilUsuario;
