import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import TipoZona from './TipoZona';
import Municipio from './Municipio';

class Zona extends Sequelize.Model {
}

Zona.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    t_zona: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    municipio_id: {
      type: Sequelize.INTEGER,
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
    modelName: 'zona'
  }
);

TipoZona.hasMany(Zona, {
  foreignKey: {
    name: 't_zona',
    allowNull: false
  }
});

Zona.belongsTo(TipoZona, {
  foreignKey: {
    name: 't_zona'
  }
});

Municipio.hasMany(Zona, {
  foreignKey: {
    name: 'municipio_id',
    allowNull: false
  }
});

Zona.belongsTo(Municipio, {
  foreignKey: {
    name: 'municipio_id'
  }
});
export default Zona;
