import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

class SeguridadSocial extends Sequelize.Model {
}

SeguridadSocial.init(
  {
    nombre: { type: Sequelize.STRING, allowNull: false },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
  },
  {
    sequelize,
    modelName: 'seguridad_social',
    underscored: true,
    freezeTableName: true
  }
);

export default SeguridadSocial;

