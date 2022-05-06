import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

class DetalleReferencia extends Sequelize.Model {
}

DetalleReferencia.init(
  {
    valor_total: { type: Sequelize.DOUBLE, allowNull: false },
    valor_inicial: { type: Sequelize.DOUBLE, allowNull: false },
    valor_carnet: { type: Sequelize.DOUBLE, allowNull: false },
    c_asegurado: { type: Sequelize.INTEGER, allowNull: false },
    c_mascota: { type: Sequelize.INTEGER, allowNull: false },
    aporte_adicional: { type: Sequelize.DOUBLE },
    estado: { type: Sequelize.STRING, defaultValue: 'activo' },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
    updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
  },
  {
    sequelize,
    modelName: 'detalle_referencia',
    validate: {
      validateMinNumber() {
        if (this.valor_total < 0 || !this.valor_total)
          throw new Error('El valor total tiene que ser mayor a 0');
        if (this.valor_inicial < 0 || !this.valor_inicial)
          throw new Error('El valor inicial tiene que ser mayor a 0');
        if (this.valor_carnet < 0 || !this.valor_carnet)
          throw new Error('El valor carnet tiene que ser mayor a 0');
      }
    }
  }
);

export default DetalleReferencia;
