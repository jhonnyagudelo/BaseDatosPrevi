import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import SeguridadSocial from './SeguridadSocial';
import Barrio from './Barrio';
import Usuario from './Usuario';
class Cliente extends Sequelize.Model {}

Cliente.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    usuario_id: {
      type: Sequelize.INTEGER,
    },
    barrio_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    seguro_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tipo_documento: {
      type: Sequelize.STRING,
    },
    n_documento: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: { args: [true], msg: 'Ingresar solo numeros' },
      },
    },
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

    genero: {
      type: Sequelize.STRING,
    },
    correo: {
      type: Sequelize.STRING,
      unique: {
        msg: 'Ya existe ese correo electonico',
      },
      validate: {
        isEmail: {
          msg: 'Por favor ingresar un correo electronico valido',
        },
      },
    },

    direccion: {
      type: Sequelize.STRING,
    },
    f_nacimiento: {
      type: Sequelize.DATE,
      validate: {
        isDate: true,
      },
    },
    tipo_vivienda: {
      type: Sequelize.STRING,
    },
    actividad_economica: {
      type: Sequelize.STRING,
      validate: {
        len: {
          args: [0, 30],
          msg: 'Tamaño maximo es de 50',
        },
      },
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  {
    sequelize,
    modelName: 'cliente',
    underscored: true,
    freezeTableName: true,
  }
);

Usuario.hasMany(Cliente, {
  foreignKey: {
    name: 'usuario_id',
  },
});

Cliente.belongsTo(Usuario, {
  foreignKey: {
    name: 'usuario_id',
  },
});

SeguridadSocial.hasMany(Cliente, {
  foreignKey: {
    name: 'seguro_id',
    allowNull: false,
  },
});

Cliente.belongsTo(SeguridadSocial, {
  foreignKey: {
    name: 'seguro_id',
  },
});

Barrio.hasMany(Cliente, {
  foreignKey: {
    name: 'barrio_id',
    allowNull: false,
  },
});

Cliente.belongsTo(Barrio, {
  foreignKey: {
    name: 'barrio_id',
  },
});

export default Cliente;
