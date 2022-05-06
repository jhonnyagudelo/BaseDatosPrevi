import { Router } from 'express';
import * as empresasCtrl from '../controllers/empresa-controller';

const router = Router();

router.get('/', empresasCtrl.getEmpresas /* #swagger.tags = ['Empresa'] */);
router.get(
  '/:id',
  empresasCtrl.getEmpresaById /* #swagger.tags = ['Empresa'] */
);
router.post(
  '/',
  empresasCtrl.createEmpresa
  /* 
   #swagger.tags = ['Empresa'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Empresa" }
            }
*/
);
router.put(
  '/:id',
  empresasCtrl.updateEmpresaById
  /*
   #swagger.tags = ['Empresa'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Empresa" }
            }
  */
);
router.delete(
  '/:id',
  empresasCtrl.deleteEmpresa /* #swagger.tags = ['Empresa'] */
);

export default router;

