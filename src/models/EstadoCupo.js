import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

class EstadoCupo extends Sequelize.Model {}

EstadoCupo.init(
  {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { len: { args: [0, 100], msg: 'Tamaño maximo es 100' } },
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  {
    sequelize,
    modelName: 'estado_cupo',
    freezeTableName: true,
    underscored: true,
  }
);

export default EstadoCupo;
