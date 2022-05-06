import Rol from '../models/Rol';

export const createRoles = async () => {
  try {
    await Rol.findAll().then((async i => {
      if (i.length > 0) return;

      await Rol.bulkCreate([{ nombre: 'visitor' }, { nombre: 'user' }, { nombre: 'admin' }]);

    }));
  } catch (e) {
    console.error(e);
  }
};