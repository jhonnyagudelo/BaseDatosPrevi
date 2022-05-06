import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import TProducto from './TProducto';
import Sede from './Sede';

class Inventario extends Sequelize.Model {
}

Inventario.init({
  descripcion: { type: Sequelize.STRING, validate: { len: { args: [0, 200], msg: 'Tamaño maximo es 200' } } },
  estado: { type: Sequelize.STRING, defaultValue: 'activo' },
  created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
}, { sequelize, modelName: 'inventario' });

TProducto.hasMany(Inventario, { foreignKey: { name: 't_producto_id', allowNull: false } });
Inventario.belongsTo(TProducto, { foreignKey: { name: 't_producto_id', allowNull: false } });

Sede.hasMany(Inventario, { foreignKey: { name: 'sede_id', allowNull: false } });
Inventario.belongsTo(Sede, { foreignKey: { name: 'sede_id', allowNull: false } });

export default Inventario;