import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

class PuntoBeneficio extends Sequelize.Model {}

PuntoBeneficio.init(
  {
    descripcion: {
      type: Sequelize.STRING,
      validate: { len: { args: [0, 500], msg: 'Tamaño maximo es 500' } },
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  { sequelize, modelName: 'punto_beneficio' }
);

export default PuntoBeneficio;
