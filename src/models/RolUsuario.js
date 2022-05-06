import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Rol from './Rol';
import Usuario from './Usuario';
class RolUsuario extends Sequelize.Model {}

RolUsuario.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    rol_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    usuario_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    descripcion: {
      type: Sequelize.STRING,
      validate: { len: { args: [0, 300], msg: 'Tamaño maximo es 300' } },
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  {
    sequelize,
    modelName: 'rol_usuario',
    underscored: true,
    freezeTableName: true,
  }
);

Usuario.belongsToMany(Rol, {
  through: { model: RolUsuario, unique: false },
  foreignKey: 'usuario_id',
});
Rol.belongsToMany(Usuario, {
  through: { model: RolUsuario, unique: false },
  foreignKey: 'rol_id',
});

export default RolUsuario;
