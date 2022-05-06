import User, { encryptPassword } from '../models/User';

export const createUsers = async () => {
  try {
    await User.findAll().then((async i => {
      if (i.length > 0) return;

      const newUser = await User.create(
        { nickname: 'user', email: 'user@gmail.com', password: await encryptPassword('123') },
        { fields: ['nickname', 'email', 'password'] }
      );
      newUser.addRols(2);

      const Admin = await User.create(
        { nickname: 'admin', email: 'admin@gmail.com', password: await encryptPassword('123') },
        { fields: ['nickname', 'email', 'password'] }
      );
      Admin.addRols(3);

      const Visitor = await User.create(
        { nickname: 'visitor', email: 'visitor@gmail.com', password: await encryptPassword('123') },
        { fields: ['nickname', 'email', 'password'] }
      );
      Visitor.addRols(1);

    }));
  } catch (e) {
    console.error(e);
  }
};