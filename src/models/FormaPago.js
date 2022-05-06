import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

class FormaPago extends Sequelize.Model {
}

FormaPago.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
  },
  {
    sequelize,
    modelName: 'forma_pago',
    freezeTableName: true
  }
);

export default FormaPago;
