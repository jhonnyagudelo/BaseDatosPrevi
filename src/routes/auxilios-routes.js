import { Router } from 'express';
import * as auxiliosCtrl from '../controllers/auxilio-controller';

const router = Router();

router.get('/', auxiliosCtrl.getAuxilios /* #swagger.tags = ['Auxilio'] */);
router.get(
  '/:id',
  auxiliosCtrl.getAuxilioById /* #swagger.tags = ['Auxilio'] */
);
router.post(
  '/',
  auxiliosCtrl.createAuxilio
  /*
    #swagger.tags = ['Auxilio']
    #swagger.parameters['Obj'] = {
    name: 'obj',
    in:'body',
    required:false,
    schema:{ $ref: "#/definitions/Auxilio" }
    }
   */
);
router.put(
  '/:id',
  auxiliosCtrl.updateAuxilioById
  /* #swagger.tags = ['Auxilio']
    #swagger.parameters['Obj'] = {
    name: 'obj',
    in:'body',
    required:false,
    schema:{ $ref: "#/definitions/Auxilio" }
    }
   */
);
router.delete(
  '/:id',
  auxiliosCtrl.deleteAuxilioById /* #swagger.tags = ['Auxilio'] */
);

export default router;

