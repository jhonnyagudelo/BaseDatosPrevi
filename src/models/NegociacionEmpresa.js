import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Empresa from './Empresa';

class NegociacionEmpresa extends Sequelize.Model {
}

NegociacionEmpresa.init({
  detalle_negociacion: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { len: { args: [0, 800], msg: 'Tamaño maximo es 800' } }
  },
  p_descuento: { type: Sequelize.DOUBLE },
  estado: { type: Sequelize.STRING, defaultValue: 'activo' },
  created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
  updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
}, { sequelize, modelName: 'negociacion_empresa' });

Empresa.hasMany(NegociacionEmpresa, { foreignKey: { name: 'empresa_id', allowNull: false } });
NegociacionEmpresa.belongsTo(Empresa, { foreignKey: { name: 'empresa_id', allowNull: false } });

export default NegociacionEmpresa;