import { Router } from 'express';
import * as barrioCtrl from '../controllers/barrio-controller';

const router = Router();

router.get('/', barrioCtrl.getBarrio /* #swagger.tags = ['Barrio'] */);
router.get('/:id', barrioCtrl.getBarrioById /* #swagger.tags = ['Barrio'] */);
router.post(
  '/',
  barrioCtrl.createBarrio
  /* #swagger.tags = ['Barrio']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Barrio" }
    }
*/
);
router.put(
  '/:id',
  barrioCtrl.updateBarrioById
  /* #swagger.tags = ['Barrio'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Barrio" }
    }
  */
);
router.delete(
  '/:id',
  barrioCtrl.deleteBarrioById /* #swagger.tags = ['Barrio'] */
);

export default router;
