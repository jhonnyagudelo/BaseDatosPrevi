import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

class Auxilio extends Sequelize.Model {}

Auxilio.init(
  {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { len: { args: [0, 30], msg: 'Tamaño maximo es 30' } },
    },
    descripcion: {
      type: Sequelize.STRING,
      validate: { len: { args: [0, 500], msg: 'Tamaño maximo es 500' } },
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  {
    sequelize,
    modelName: 'auxilio',
    freezeTableName: true,
  }
);

export default Auxilio;
