import { Router } from 'express';
import * as referenciaCtrl from '../controllers/referencia-controller';

const router = Router();

router.get(
  '/',
  referenciaCtrl.getReferencia /* #swagger.tags = ['Referencia'] */
);
router.get(
  '/:id',
  referenciaCtrl.getReferenciaById /* #swagger.tags = ['Referencia'] */
);
router.post(
  '/',
  referenciaCtrl.createReferencia
  /*
  #swagger.tags = ['Referencia']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Referencia" }
    }
  */
);
router.put(
  '/:id',
  referenciaCtrl.updateReferenciaById
  /*
  #swagger.tags = ['Referencia']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Referencia" }
    }
  */
);
router.delete(
  '/:id',
  referenciaCtrl.deleteReferenciaById /* #swagger.tags = ['Referencia'] */
);

router.get(
  '/find-by-producto-id/:productoId',
  referenciaCtrl.referenciaByProducto
  /*
  #swagger.tags = ['Referencia']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Referencia" }
    }
  */
);

export default router;
