import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import DiaPago from './DiaPago';
import Referencia from './Referencia';
import Empresa from './Empresa';
import Cliente from './Cliente';
import EstadoCupo from './EstadoCupo';

class Cupo extends Sequelize.Model {}

Cupo.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cliente_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    referencia_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    empresa_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    estado_cupo_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    dia_pago_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    valor: {
      type: Sequelize.DOUBLE,
    },
    direccion_cobro: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { len: [5, 300], notEmpty: true },
    },
    protege: {
      type: Sequelize.STRING,
    },
    f_vencimiento: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("now () + INTERVAL '1 year'"),
    },
    control_sistema: {
      type: Sequelize.INTEGER,
    },
    bono_fidelidad: {
      type: Sequelize.INTEGER,
    },
    bono_pronto_pago: {
      type: Sequelize.INTEGER,
    },
    premiacion: {
      type: Sequelize.INTEGER,
    },
    transporte: {
      type: Sequelize.STRING,
    },
    descripcion: {
      type: Sequelize.STRING,
      validate: {
        len: {
          args: [0, 500],
          msg: 'Tamaño maximo es de 500',
        },
      },
    },
    finanzas: {
      type: Sequelize.STRING,
      validate: {
        len: {
          args: [0, 50],
          msg: 'Tamaño maximo es de 50',
        },
      },
    },
    gestor: {
      type: Sequelize.STRING,
      validate: {
        len: {
          args: [0, 50],
          msg: 'Tamaño maximo es de 50',
        },
      },
    },
    bienestar: {
      type: Sequelize.STRING,
      validate: {
        len: {
          args: [0, 50],
          msg: 'Tamaño maximo es de 50',
        },
      },
    },
    sede: {
      type: Sequelize.STRING,
      validate: {
        len: {
          args: [0, 20],
          msg: 'Tamaño maximo es de 20',
        },
      },
    },
    origen: {
      type: Sequelize.STRING,
      validate: {
        len: {
          args: [0, 20],
          msg: 'Tamaño maximo es de 20',
        },
      },
    },
    obsequio: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    referencia_producto: {
      type: Sequelize.STRING,
    },
    prod_item: {
      type: Sequelize.INTEGER,
    },
    cod_gestor: {
      type: Sequelize.INTEGER,
    },
    firma: {
      type: Sequelize.TEXT,
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  {
    sequelize,
    modelName: 'cupo',
    freezeTableName: true,
  }
);

Cliente.hasMany(Cupo, { foreignKey: { name: 'cliente_id', allowNull: false } });
Cupo.belongsTo(Cliente, { foreignKey: { name: 'cliente_id' } });

Referencia.hasMany(Cupo, {
  foreignKey: { name: 'referencia_id', allowNull: false },
});
Cupo.belongsTo(Referencia, { foreignKey: { name: 'referencia_id' } });

Empresa.hasMany(Cupo, {
  foreignKey: { name: 'empresa_id' },
});
Cupo.belongsTo(Empresa, { foreignKey: { name: 'empresa_id' } });

DiaPago.hasMany(Cupo, {
  foreignKey: {
    name: 'dia_pago_id',
    allowNull: false,
  },
});

Cupo.belongsTo(DiaPago, {
  foreignKey: {
    name: 'dia_pago_id',
  },
});

EstadoCupo.hasMany(Cupo, {
  foreignKey: { name: 'estado_cupo_id', allowNull: false },
});
Cupo.belongsTo(EstadoCupo, {
  foreignKey: { name: 'estado_cupo_id', allowNull: false },
});

export default Cupo;
