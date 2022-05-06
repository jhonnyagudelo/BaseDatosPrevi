import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
class Rol extends Sequelize.Model {}

Rol.init(
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},

		nombre: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: { msg: 'Ya existe un rol con ese nombre' },
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
		modelName: 'rol',
		underscored: true,
		freezeTableName: true,
	}
);

//Rol.belongsTo(Rol, { foreignKey: { name: 'rol_padre_id' } });
//Rol.hasMany(Rol, { foreignKey: { name: 'rol_id' } });

export default Rol;
