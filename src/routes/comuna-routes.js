import { Router } from 'express';
import * as comunaCtrl from '../controllers/comuna-controller';

const router = Router();

router.get('/', comunaCtrl.getComuna /* #swagger.tags = ['Comuna'] */);
router.get('/:id', comunaCtrl.getComunaById /* #swagger.tags = ['Comuna'] */);
router.post(
  '/',
  comunaCtrl.createComuna
  /* 
   #swagger.tags = ['Comuna']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Comuna" }
}
*/
);
router.put(
  '/:id',
  comunaCtrl.updateComuna
  /* 
   #swagger.tags = ['Comuna'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Comuna" }
}
*/
);
router.delete('/:id', comunaCtrl.deleteComuna /* #swagger.tags = ['Comuna'] */);

router.get(
  '/find-by-zona-id/:zonaId',
  comunaCtrl.comunaByZona /* #swagger.tags = ['Comuna'] */
);

export default router;
