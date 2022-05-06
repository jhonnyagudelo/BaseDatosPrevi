import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import DetalleUsuario from './DetalleUsuario';
import Parentesco from './Parentesco';

class ReferenciaFamiliar extends Sequelize.Model {
}

ReferenciaFamiliar.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    detalle_usuario_id: {
      type: Sequelize.INTEGER,
      alloNull: false
    },
    parentesco_id: {
      type: Sequelize.INTEGER,
      alloNull: false
    },
    nombres: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: 'Por favor solo ingresar letras'
        }
      }
    },
    primer_apellido: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: 'Por favor solo ingresar letras'
        }
      }
    },
    segundo_apellido: {
      type: Sequelize.STRING,
      validate: {
        isAlpha: {
          msg: 'Por favor solo ingresar letras'
        }
      }
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
  },
  {
    sequelize,
    modelName: 'referencia_familiar',
    freezeTableName: true
  }
);

DetalleUsuario.hasMany(ReferenciaFamiliar, {
  foreignKey: {
    name: 'detalle_usuario_id',
    allowNull: false
  }
});

ReferenciaFamiliar.belongsTo(DetalleUsuario, {
  foreignKey: {
    name: 'detalle_usuario_id'
  }
});

Parentesco.hasMany(ReferenciaFamiliar, {
  foreignKey: {
    name: 'parentesco_id',
    allowNull: false
  }
});

ReferenciaFamiliar.belongsTo(Parentesco, {
  foreignKey: {
    name: 'parentesco_id'
  }
});

export default ReferenciaFamiliar;
