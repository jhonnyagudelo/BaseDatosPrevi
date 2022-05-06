import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Inventario from './Inventario';

class MInventario extends Sequelize.Model {
}

MInventario.init({
  nota: { type: Sequelize.STRING, validate: { len: { args: [0, 500], msg: 'Tamaño maximo es 500' } } },
  descripcion: { type: Sequelize.STRING, validate: { len: { args: [0, 500], msg: 'Tamaño maximo es 500' } } },
  m_naturaleza: { type: Sequelize.STRING, allowNull: false },
  cantidad: { type: Sequelize.INTEGER, allowNull: false },
  serie: { type: Sequelize.STRING, validate: { len: { args: [0, 100], msg: 'Tamaño maximo es 100' } } },
  valor_unitario: { type: Sequelize.DOUBLE },
  valor_total: { type: Sequelize.DOUBLE },
  rango_inicial: { type: Sequelize.INTEGER },
  rango_final: { type: Sequelize.INTEGER },
  consecutivo: { type: Sequelize.INTEGER },
  concepto: { type: Sequelize.STRING },
  usuario_encargado: { type: Sequelize.STRING, allowNull: false },
  usuario_entregado: { type: Sequelize.STRING },
  confirmacion: { type: Sequelize.BOOLEAN },
  estado: { type: Sequelize.STRING, defaultValue: 'activo' },
  created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
}, {
  sequelize, modelName: 'm_inventario', validate: {
    validateMinCheck() {
      if (this.valor_unitario <= 0 || !this.valor_unitario) throw new Error('Valor unitario debe ser mayor o igual a 0');
      if (this.valor_total < this.valor_unitario || !this.valor_total) throw new Error('Valor total debe ser mayor o igual a 0');
    }
  }
});

Inventario.hasMany(MInventario, { foreignKey: { name: 'inventario_id', allowNull: false } });
MInventario.belongsTo(Inventario, { foreignKey: { name: 'inventario_id', allowNull: false } });

Inventario.hasMany(MInventario, { foreignKey: { name: 'proveedor_id', allowNull: false } });
MInventario.belongsTo(Inventario, { foreignKey: { name: 'proveedor_id', allowNull: false } });

export default MInventario;