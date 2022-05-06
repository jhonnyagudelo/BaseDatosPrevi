import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

class CategoriaBeneficio extends Sequelize.Model {}

CategoriaBeneficio.init(
  {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { len: { args: [0, 100], msg: 'Tamaño maximo es 100' } },
    },
    descripcion: {
      type: Sequelize.STRING,
      validate: { len: { args: [0, 500], msg: 'Tamaño maximo es 500' } },
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  { sequelize, modelName: 'categoria_beneficio' }
);

export default CategoriaBeneficio;
