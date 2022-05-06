import Sequelize from 'sequelize';

import { sequelize } from '../database/database';
import Rol from './Rol';
import Permiso from './Permiso';
class RolDetalle extends Sequelize.Model {}

RolDetalle.init(
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
    permiso_id: {
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
    underscored: true,
    sequelize,
    modelName: 'rol_detalle',
    freezeTableName: true,
  }
);

Permiso.belongsToMany(Permiso, { through: RolDetalle });
Rol.belongsToMany(Rol, { through: RolDetalle });
