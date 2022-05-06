import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Sede from './Sede';

class Origen extends Sequelize.Model {
}

Origen.init(
  {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { len: { args: [0, 30], msg: 'Tamaño maximo es 30' } }
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
  },
  { sequelize, modelName: 'origen' }
);

Sede.hasMany(Origen, { foreignKey: { name: 'sede_id', allowNull: false } });
Origen.belongsTo(Sede, { foreignKey: { name: 'sede_id', allowNull: false } });

export default Origen;

