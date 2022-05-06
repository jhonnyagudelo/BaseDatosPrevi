import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

class TipoZona extends Sequelize.Model {
}

TipoZona.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nombre: {
      type: Sequelize.STRING,
      validate: {
        len: {
          args: [0, 50],
          msg: 'Tamaño maximo es de 50'
        }
      }
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
  },
  {
    sequelize,
    modelName: 'tipo_zona'
  }
);

export default TipoZona;
