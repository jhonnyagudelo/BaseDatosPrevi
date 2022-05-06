import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Inventario from './Inventario';

class Kardex extends Sequelize.Model {
}

Kardex.init({
  t_estado: { type: Sequelize.STRING, allowNull: false },
  cantidad: { type: Sequelize.INTEGER },
  total: { type: Sequelize.INTEGER, allowNull: false },
  valor_unitario: { type: Sequelize.DOUBLE, allowNull: false },
  valor_total: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    defaultValue: Sequelize.fn('SUM', Sequelize.col('valor_unitario') * Sequelize.col('cantidad'), 'valor_total')
  },
  estado: { type: Sequelize.STRING, defaultValue: 'activo' },
  created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
}, {
  sequelize, modelName: 'kardex', validate: {
    validateMinNumber() {
      if (this.valor_total < this.valor_unitario || !this.valor_total) throw new Error('Valor total debe ser mayor o igual a valor unitario');
      if (this.valor_unitario <= 0 || !this.valor_unitario) throw new Error('Valor unitario debe se mayor o igual a 0 y diferente de null');
    }
  }
});

Inventario.hasMany(Kardex, { foreignKey: { name: 'inventario_id', allowNull: false } });
Kardex.belongsTo(Inventario, { foreignKey: { name: 'inventario_id', allowNull: false } });

export default Kardex;