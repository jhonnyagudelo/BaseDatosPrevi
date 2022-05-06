import { Router } from 'express';
import * as credencialCtrol from '../controllers/credencial-controller';

const router = Router();

router.get(
  '/',
  credencialCtrol.getCredencial /* #swagger.tags = ['Credencial'] */
);
router.get(
  '/:id',
  credencialCtrol.getCredencialById /* #swagger.tags = ['Credencial'] */
);
router.post(
  '/',
  credencialCtrol.createCredencial
  /* 
   #swagger.tags = ['Credencial'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Credencial" }
}
  */
);
router.put(
  '/:id',
  credencialCtrol.updateCredencialById
  /* 
   #swagger.tags = ['Credencial']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Credencial" }
}
  */
);
router.delete(
  '/:id',
  credencialCtrol.deleteCredencialById /* #swagger.tags = ['Credencial'] */
);

export default router;
