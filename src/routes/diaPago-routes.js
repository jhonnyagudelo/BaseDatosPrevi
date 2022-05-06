import { Router } from 'express';
import * as diaCtrl from '../controllers/diaPago-controller';

const router = Router();

router.get(
  '/',
  diaCtrl.getDiaPago
  /* #swagger.tags = [ 'DiaPago' ] */
);
router.get(
  '/:id',
  diaCtrl.getDiaPagoById
  /* #swagger.tags = [ 'DiaPago' ] */
);
router.post(
  '/',
  diaCtrl.createDiaPago

  /*
    #swagger.tags = [ 'DiaPago' ]
    #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/DiaPago" }
     }       
   */
);
router.put(
  '/:id',
  diaCtrl.updateDiaById
  /*
    #swagger.tags = [ 'DiaPago' ]
    #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/DiaPago" }
    }
   */
);
router.delete(
  '/:id',
  diaCtrl.deleteDia
  /* #swagger.tags = [ 'DiaPago' ] */
);

export default router;
