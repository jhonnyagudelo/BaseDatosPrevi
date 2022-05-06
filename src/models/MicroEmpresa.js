import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Cliente from './Cliente';

class MicroEmpresa extends Sequelize.Model {
}

MicroEmpresa.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    cliente_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { len: { args: [0, 80], msg: 'Tamaño maximo es 80' } }
    },
    direccion: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { len: { args: [0, 80], msg: 'Tamaño maximo es 80' } }
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
  },
  {
    undercore: true,
    sequelize,
    modelName: 'micro_empresa',
    freezeTableName: true
  }
);

Cliente.hasMany(MicroEmpresa, {
  foreignKey: { name: 'cliente_id', allowNull: false }
});

MicroEmpresa.belongsTo(Cliente, { foreignKey: { name: 'cliente_id' } });

export default MicroEmpresa;
