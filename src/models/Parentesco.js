import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

class Parentesco extends Sequelize.Model {
}

Parentesco.init(
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    nombre: { type: Sequelize.STRING, allowNull: false },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
  },
  {
    underscored: true,
    sequelize,
    modelName: 'parentesco',
    freezeTableName: true
  }
);

export default Parentesco;
