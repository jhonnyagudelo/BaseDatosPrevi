import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

class CProducto extends Sequelize.Model {}

CProducto.init(
  {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { len: { args: [0, 200], msg: 'Tamaño maximo es 200' } },
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  { sequelize, modelName: 'c_producto' }
);

export default CProducto;
