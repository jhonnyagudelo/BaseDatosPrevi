import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

class Empresa extends Sequelize.Model {}

Empresa.init(
  {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { len: { args: [0, 200], msg: 'Tamaño maximo es 200' } },
    },
    telefono: { type: Sequelize.INTEGER },
    correo: {
      type: Sequelize.STRING,
      unique: true,
      validate: { len: { args: [0, 200], msg: 'Tamaño maximo es 200' } },
    },
    c_personas: Sequelize.INTEGER,
    sucursal: {
      type: Sequelize.STRING,
      validate: { len: { args: [0, 100], msg: 'Tamaño maximo es 100' } },
    },
    rut: { type: Sequelize.INTEGER, unique: true },
    nit: { type: Sequelize.INTEGER, unique: true },
    camara_comercio: {
      type: Sequelize.STRING,
      validate: { len: { args: [0, 200], msg: 'Tamaño maximo es 200' } },
    },
    certificacion_bancaria: {
      type: Sequelize.STRING,
      validate: { len: { args: [0, 200], msg: 'Tamaño maximo es 200' } },
    },
    nombre_contacto: {
      type: Sequelize.STRING,
      validate: { len: { args: [0, 100], msg: 'Tamaño maximo es 100' } },
    },
    documento: {
      type: Sequelize.STRING,
      validate: { len: { args: [0, 500], msg: 'Tamaño maximo es 500' } },
    },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  { sequelize, modelName: 'empresa' }
);

export default Empresa;
