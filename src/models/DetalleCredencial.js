import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Cupo from './Cupo';
import Credencial from './Credencial';
import Parentesco from './Parentesco';

class DetalleCredencial extends Sequelize.Model {}

DetalleCredencial.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    credencial_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    cupo_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    parentesco_id: {
      type: Sequelize.INTEGER,
    },
    entregado: {
      type: Sequelize.BOOLEAN,
    },
    n_credencial: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        notNull: { msg: 'Por favot ingresa el numero de la credencial' },
      },
    },
    delegado: {
      type: Sequelize.STRING,
      defaultValue: 'No asignado',
      validate: {
        len: { args: [5, 80], msg: 'Tamaño maximo es de 80' },
      },
    },
    nom_recibe: {
      type: Sequelize.STRING,
      validate: {
        len: { args: [5, 80], msg: 'Tamaño maximo es de 80' },
      },
    },
    f_vencimiento: {
      type: Sequelize.DATE,
    },
    f_compra: {
      type: Sequelize.DATE,
    },
    n_documento: {
      type: Sequelize.INTEGER,
      validate: {
        isNumeric: true,
      },
    },
    u_codigo: {
      type: Sequelize.INTEGER,
      validate: {
        isNumeric: true,
      },
    },

    impreso: { type: Sequelize.BOOLEAN, defaultValue: false },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  {
    sequelize,
    modelName: 'detalle_credencial',
    freezeTableName: true,
  }
);

Cupo.hasMany(DetalleCredencial, {
  foreignKey: {
    name: 'cupo_id',
    allowNull: false,
  },
});

Parentesco.hasMany(DetalleCredencial, {
  foreignKey: {
    name: 'parentesco_id',
    allowNull: false,
  },
});

Credencial.hasMany(DetalleCredencial, {
  foreignKey: {
    name: 'credencial_id',
  },
});

DetalleCredencial.belongsTo(Credencial, {
  foreignKey: {
    name: 'credencial_id',
    allowNull: false,
  },
});

DetalleCredencial.belongsTo(Cupo, {
  foreignKey: {
    name: 'cupo_id',
  },
});

DetalleCredencial.belongsTo(Parentesco, {
  foreignKey: {
    name: 'parentesco_id',
  },
});

export default DetalleCredencial;
