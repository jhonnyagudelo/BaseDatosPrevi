import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import DetalleReferencia from './DetalleReferencia';
import Producto from './Producto';

class Referencia extends Sequelize.Model {}

Referencia.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    detalle_referencia_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: { args: [0, 30], msg: 'Tamaño maximo es 30' },
      },
    },
    r_numero: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    producto_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    prod_item: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    contador_inicial: {
      type: Sequelize.INTEGER,
      validate: {
        isNumeric: true,
      },
    },
    contador_final: {
      type: Sequelize.INTEGER,
      validate: {
        isNumeric: true,
      },
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  {
    sequelize,
    modelName: 'referencia',
    freezeTableName: true,
  }
);

DetalleReferencia.hasMany(Referencia, {
  foreignKey: {
    name: 'detalle_referencia_id',
    allowNull: false,
  },
});

Referencia.belongsTo(DetalleReferencia, {
  foreignKey: {
    name: 'detalle_referencia_id',
  },
});

Producto.hasMany(Referencia, {
  foreignKey: {
    name: 'producto_id',
    allowNull: false,
  },
});

Referencia.belongsTo(Producto, {
  foreignKey: {
    name: 'producto_id',
  },
});

export default Referencia;
