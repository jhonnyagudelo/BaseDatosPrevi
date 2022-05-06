import * as especiesRoutesCtrl from '../controllers/especie-controller';
import { Router } from 'express';

const router = Router();

router.get(
  '/',
  especiesRoutesCtrl.getEspecies /* #swagger.tags = ['Especie'] */
);
router.get(
  '/:id',
  especiesRoutesCtrl.getEspecieById /* #swagger.tags = ['Especie'] */
);
router.post(
  '/',
  especiesRoutesCtrl.createEspecie
  /* #swagger.tags = ['Especie'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Especie" }
            }
  * */
);
router.put(
  '/:id',
  especiesRoutesCtrl.updateEspecieById
  /* 
   #swagger.tags = ['Especie'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Especie" }
            }
  */
);
router.delete(
  '/:id',
  especiesRoutesCtrl.deleteEspecieById /* #swagger.tags = ['Especie'] */
);

export default router;

