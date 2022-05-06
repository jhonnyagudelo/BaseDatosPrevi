import { Router } from 'express';
import * as detallePagoCtrl from '../controllers/detalle_pago-controller';
import upload from '../libs/storage';

const router = Router();

router.post(
  '/',
  upload,
  detallePagoCtrl.createDetallePago
  /*
  #swagger.tags = ['DetallePago']
  #swagger.consumes = ['multipart/form-data']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/DetallePago" }
    }
  */
);
router.get(
  '/:id',
  detallePagoCtrl.getDetallePagoById
  /*
  #swagger.tags = ['DetallePago']
  */
);
router.get(
  '/',
  detallePagoCtrl.getDetallePago
  /*
  #swagger.tags = ['DetallePago']
  */
);
router.put(
  '/:id',
  detallePagoCtrl.updateDetallePagoById
  /*
  #swagger.tags = ['DetallePago']
  #swagger.consumes = ['multipart/form-data']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/DetallePago" }
    }
  */
);

export default router;
