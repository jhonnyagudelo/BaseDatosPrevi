import { Router } from 'express';
import * as rolesCtrl from '../controllers/rol-controller';
import { authJwt } from '../middlewares';

const router = Router();

router.get('/', rolesCtrl.getRoles /* #swagger.tags = ['Rol'] */);
router.get('/:id', rolesCtrl.getRolById /* #swagger.tags = ['Rol'] */);
router.post(
  '/',
  //[authJwt.verifyToken, authJwt.isAdmin],
  rolesCtrl.createRol /*
  #swagger.tags = ['Rol']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Rol" }
    }
  */
);
router.put(
  '/:id',
  rolesCtrl.updateRolById /*
  #swagger.tags = ['Rol']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Rol" }
    }
  */
);
router.delete('/:id', rolesCtrl.deleteRolById /* #swagger.tags = ['Rol'] */);

export default router;
