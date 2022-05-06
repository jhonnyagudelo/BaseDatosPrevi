import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import CProducto from './CProducto';
import Prst from './Prst';

class TProducto extends Sequelize.Model {
}

TProducto.init({
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { len: { args: [0, 200], msg: 'Tamaño maximo es 200' } }
  },
  descripcion: { type: Sequelize.STRING, validate: { len: { args: [0, 200], msg: 'Tamaño maximo es 200' } } },
  consecutivo: { type: Sequelize.BOOLEAN, allowNull: false },
  estado: { type: Sequelize.STRING, defaultValue: 'activo' },
  created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
}, { sequelize, modelName: 't_producto' });

CProducto.hasMany(TProducto, { foreignKey: { name: 'c_producto_id', allowNull: false } });
TProducto.belongsTo(CProducto, { foreignKey: { name: 'c_producto_id', allowNull: false } });

Prst.hasMany(TProducto, { foreignKey: { name: 'prst_id', allowNull: false } });
TProducto.belongsTo(Prst, { foreignKey: { name: 'prst_id', allowNull: false } });

export default TProducto;