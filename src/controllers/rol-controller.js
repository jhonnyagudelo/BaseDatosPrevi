import Rol from '../models/Rol';

export const getRoles = async (req, res) => {
	try {
		const roles = await Rol.findAll({});
		if (!roles.length > 0)
			return res.status(404).json({ message: 'Roles dont exists', data: [] });

		return res.json({
			message: 'Roles find successfully',
			data: roles,
		});
	} catch (e) {
		res.status(500).json({
			message: 'Something goes wrong',
			data: [],
			err: e,
		});
	}
};

export const getRolById = async (req, res) => {
	try {
		const { id } = req.params;
		const rol = await Rol.findOne({
			where: { id },
		});
		return res.json({
			message: 'Rol find successfully',
			data: rol,
		});
	} catch (e) {
		res.status(500).json({
			message: 'Something goes wrong',
			data: {},
			err: e,
		});
	}
};

export const createRol = async (req, res) => {
	try {
		const { nombre, descripcion } = req.body;
		const newRol = await Rol.create(
			{ nombre, descripcion },
			{ fields: ['nombre', 'descripcion'] }
		);
		return res.json({
			message: 'Rol created successfully',
			data: newRol,
		});
	} catch (e) {
		res.status(500).json({
			message: 'Something goes wrong',
			data: {},
			err: e,
		});
	}
};

export const updateRolById = async (req, res) => {
	try {
		const { id } = req.params;
		const { nombre, descripcion, estado } = req.body;
		const updateRol = await Rol.findOne({ where: { id } });
		if (!updateRol) return res.json({ message: 'Rol dont exists', data: {} });

		await updateRol.update({ nombre, descripcion, estado }, { where: { id } });
		return res.json({ message: 'Rol updated successfully', data: updateRol });
	} catch (e) {
		res.status(500).json({
			message: 'Something goes wrong',
			data: {},
			err: e,
		});
	}
};

export const deleteRolById = async (req, res) => {
	try {
		const { id } = req.params;

		const deleteRol = await Rol.findOne({
			where: { id },
		});

		if (!deleteRol)
			return res.status(404).json({ message: 'Rol dont exists', data: {} });

		await deleteRol.destroy();

		res.json({ message: 'Rol deleted successfully', data: {} });
	} catch (e) {
		res.json({ message: 'Something goes wrong', data: {}, err: e });
	}
};
