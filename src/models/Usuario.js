import Sequelize from 'sequelize';

import { sequelize } from '../database/database';
import bcrypt from 'bcryptjs';
class Usuario extends Sequelize.Model {}

Usuario.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [0, 30],
          msg: 'Tamaño maximo 30',
          isEmail: { args: true, msg: 'Dont is email valid' },
        },
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { len: { args: [0, 300], msg: 'Tamaño maximo es de 300' } },
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  {
    underscored: true,
    sequelize,
    modelName: 'usuario',
    freezeTableName: true,
  }
);

//Rol.hasMany(Usuario, { foreignKey: { name: 'rol_id', allowNull: false } });
//Usuario.belongsTo(Rol, { foreignKey: { name: 'rol_id' } });

export const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};
export const comparePassword = async (password, receivedPassword) => {
  return bcrypt.compare(password, receivedPassword);
};

export default Usuario;
