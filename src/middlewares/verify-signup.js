// validator elements of relation auth
import Rol from '../models/Rol';
import Usuario from '../models/Usuario';

export const checkDuplicateEmail = async (req, res, next) => {
  try {
    const duplicateEmail = await Usuario.findOne({ where: { email: req.body.email } });

    if (duplicateEmail) return res.json({ message: 'Usuario already exists with email' });

    const duplicateNickname = await Usuario.findOne({ where: { nickname: req.body.nickname } });

    if (duplicateNickname) return res.json({ message: 'Usuario already exists with email' });

    next();

  } catch (e) {
    res.json({ message: 'Something goes wrong' });
  }
};

export const checkRolesExisted = async (req, res, next) => {
    try {
      if (req.body.rols) {
        req.body.rols.forEach((async rols => {
          const role = await Rol.findByPk(rols);
          if (!role) return res.json({
            message: `Rol dont found ${rols}`
          });
        }));
        next();
      }
    } catch
      (e) {
      res.status(500).json({ message: 'Something goes wrong', err: e });
    }
  }
;