import { Router } from 'express';
import * as sedesCtrl from '../controllers/sede-controller';

const router = Router();

router.get('/', sedesCtrl.getSedes /* #swagger.tags = ['Sede'] */);
router.get('/:id', sedesCtrl.getSedeById /* #swagger.tags = ['Sede'] */);
router.post(
  '/',
  sedesCtrl.createSede /*
  #swagger.tags = ['Sede']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Sede" }
    }
  */
);
router.put(
  '/:id',
  sedesCtrl.updateSedeById /*
  #swagger.tags = ['Sede']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Sede" }
    }
  */
);
router.delete('/:id', sedesCtrl.deleteSedeById /* #swagger.tags = ['Sede'] */);

export default router;
