import { Router } from 'express';
import * as clienteCtrl from '../controllers/cliente-controller';

const router = Router();

router.get('/', clienteCtrl.getCliente /* #swagger.tags = ['Cliente'] */);
router.get(
  '/:id',
  clienteCtrl.getClienteById /* #swagger.tags = ['Cliente'] */
);
router.post(
  '/',
  clienteCtrl.createCliente
  /* 
   #swagger.tags = ['Cliente']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Cliente" }
}
*/
);
router.put(
  '/:id',
  clienteCtrl.updateCliente
  /* 
   #swagger.tags = ['Cliente'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Cliente" }
}
*/
);
router.delete(
  '/:id',
  clienteCtrl.deleteCliente /* #swagger.tags = ['Cliente'] */
);

router.get(
  '/documento/:n_documento',
  clienteCtrl.getClienteDocumento /* #swagger.tags = ['Cliente'] */
);

router.post(
  '/create-cliente',
  clienteCtrl.createByClienteAndTelefono /* 
   #swagger.tags = ['Cliente']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Cliente" }
}
*/
);

export default router;
