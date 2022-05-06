import { Router } from 'express';
import * as departamentoCtrl from '../controllers/departamento-controller';

const router = Router();

router.get(
  '/',
  departamentoCtrl.getDepartamento /* #swagger.tags = ['Departamento'] */
);
router.get(
  '/:id',
  departamentoCtrl.getDepartamentoById /* #swagger.tags = ['Departamento'] */
);
router.post(
  '/',
  departamentoCtrl.createDepartamento
  /* 
  * #swagger.tags = ['Departamento'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Departamento" }
}
  * */
);
router.put(
  '/:id',
  departamentoCtrl.updateDepartamentoById
  /* 
   #swagger.tags = ['Departamento'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Departamento" }
}
   */
);
router.delete(
  '/:id',
  departamentoCtrl.deleteDepartamentoById /* #swagger.tags = ['Departamento'] */
);

export default router;
