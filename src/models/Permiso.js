import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import { Componente } from './Componente';
class Permiso extends Sequelize.Model {}

Permiso.init(
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},

		permiso_padre_id: {
			type: Sequelize.INTEGER,
		},

		componente_id: {
			type: Sequelize.INTEGER,
		},
		nombre: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: { msg: 'Ya existe un permiso con ese nombre' },
			validate: { len: { args: [0, 50], msg: 'Tamaño maximo es 50' } },
		},

		descripcion: {
			type: Sequelize.STRING,
			validate: { len: { args: [0, 300], msg: 'Tamaño maximo es 300' } },
		},
		estado: { type: Sequelize.STRING, defaultValue: 'activo' },
		created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
		updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
	},
	{
		sequelize,
		modelName: 'permiso',
		underscored: true,
		freezeTableName: true,
	}
);

//Permiso.belongsTo(Permiso, { foreignKey: { name: 'rol_padre_id' } });
Permiso.hasMany(Permiso, { foreignKey: { name: 'permiso_padre_id' } });
Componente.hasMany(Permiso, {
	foreignKey: {
		name: 'componente_id',
		allowNull: false,
	},
});

Permiso.belongsTo(Componente, {
	foreignKey: {
		name: 'componente_id',
	},
});

export default Permiso;
