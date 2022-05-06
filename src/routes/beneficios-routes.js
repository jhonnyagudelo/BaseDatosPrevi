import { Router } from 'express';
import * as beneficiosCtrl from '../controllers/beneficio-controller';

const router = Router();

router.get(
  '/',
  beneficiosCtrl.getBeneficios /* #swagger.tags = ['Beneficio'] */
);
router.get(
  '/:id',
  beneficiosCtrl.getBeneficioById /* #swagger.tags = ['Beneficio'] */
);
router.post(
  '/',
  beneficiosCtrl.createBeneficio
  /* 
   #swagger.tags = ['Beneficio'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Beneficio" }
    }
*/
);
router.put(
  '/:id',
  beneficiosCtrl.updateBeneficioById
  /* 
   #swagger.tags = ['Beneficio'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Beneficio" }
    }
  */
);
router.delete(
  '/:id',
  beneficiosCtrl.deleteBeneficioById /* #swagger.tags = ['Beneficio'] */
);

export default router;

