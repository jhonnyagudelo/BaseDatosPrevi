import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Cupo from '../models/Cupo';

class Cartera extends Sequelize.Model {
}

Cartera.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    cupo_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    valor: {
      type: Sequelize.DOUBLE
    },
    saldo: {
      type: Sequelize.DOUBLE
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
  },
  {
    sequelize,
    modelName: 'cartera',
    freezeTableName: true
  }
);

Cupo.hasMany(Cartera, {
  foreignKey: {
    name: 'cupo_id',
    allowNull: false
  }
});

Cartera.belongsTo(Cupo, {
  foreignKey: {
    name: 'cupo_id'
  }
});

export default Cartera;
