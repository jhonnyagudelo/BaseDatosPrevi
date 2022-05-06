import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Auxilio from './Auxilio';
import Parentesco from './Parentesco';
import Cupo from './Cupo';

class Asegurado extends Sequelize.Model {}
Asegurado.init(
  {
    cupo_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    auxilio_id: {
      type: Sequelize.INTEGER,
    },
    parentesco_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { len: { args: [0, 100], msg: 'Tamaño maximo es 100' } },
    },
    descripcion: {
      type: Sequelize.STRING,
      validate: { len: { args: [0, 500], msg: 'Tamaño maximo es 500' } },
    },
    ocupacion: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { len: { args: [0, 100], msg: 'Tamaño maximo es 100' } },
    },
    edad: { type: Sequelize.INTEGER, allowNull: false },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  },
  {
    sequelize,
    modelName: 'asegurado',
    freezeTableName: true,
  }
);

Auxilio.hasMany(Asegurado, {
  foreignKey: { name: 'auxilio_id', allowNull: false },
});
Asegurado.belongsTo(Auxilio, {
  foreignKey: { name: 'auxilio_id', allowNull: false },
});

Parentesco.hasMany(Asegurado, {
  foreignKey: { name: 'parentesco_id' },
});
Asegurado.belongsTo(Parentesco, {
  foreignKey: { name: 'parentesco_id' },
});

Cupo.hasMany(Asegurado, {
  foreignKey: { name: 'cupo_id', allowNull: false },
});
Asegurado.belongsTo(Cupo, {
  foreignKey: { name: 'cupo_id', allowNull: false },
});

export default Asegurado;
