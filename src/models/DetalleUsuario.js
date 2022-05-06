import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Usuario from './Usuario';
import Sede from './Sede';

class DetalleUsuario extends Sequelize.Model {}

DetalleUsuario.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    sede_id: { type: Sequelize.INTEGER },

    usuario_id: { type: Sequelize.INTEGER, unique: true, allowNull: false },

    u_codigo: { type: Sequelize.INTEGER, allowNull: false, unique: true },

    primer_nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { len: { args: [0, 30], msg: 'Tamaño maximo es 30' } },
    },
    segundo_nombre: {
      type: Sequelize.STRING,
      validate: { len: { args: [0, 30], msg: 'Tamaño maximo es 30' } },
    },
    primer_apellido: {
      allowNull: false,
      type: Sequelize.STRING,
      validate: { len: { args: [0, 30], msg: 'Tamaño maximo es 30' } },
    },
    segundo_apellido: {
      type: Sequelize.STRING,
      validate: { len: { args: [0, 30], msg: 'Tamaño maximo es 30' } },
    },
    n_documento: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: true,
    },
    direccion: {
      type: Sequelize.STRING,
      validate: { len: { args: [0, 300], msg: 'Tamaño maximo es 300' } },
    },
    rh: { type: Sequelize.STRING },
    tipo_documento: { type: Sequelize.STRING },
    estado_civil: { type: Sequelize.STRING },
    genero: { type: Sequelize.STRING },
    correo: {
      type: Sequelize.STRING,
      validate: { isEmail: { args: true, msg: 'Correo is not valid' } },
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  {
    underscored: true,
    sequelize,
    modelName: 'detalle_usuario',
    freezeTableName: true,
  }
);

Usuario.hasMany(DetalleUsuario, {
  foreignKey: { name: 'usuario_id', allowNull: false },
});
DetalleUsuario.belongsTo(Usuario, { foreignKey: { name: 'usuario_id' } });

Sede.hasMany(DetalleUsuario, {
  foreignKey: { name: 'sede_id', allowNull: false },
});
DetalleUsuario.belongsTo(Sede, {
  foreignKey: { name: 'sede_id', allowNull: false },
});

export default DetalleUsuario;
