import { Router } from 'express';
import * as detalleReferenciasCtrl from '../controllers/detalle-referencia-controller';

const router = Router();

router.get(
  '/',
  detalleReferenciasCtrl.getDetalleReferencias /* #swagger.tags = ['DetalleReferencia'] */
);
router.get(
  '/:id',
  detalleReferenciasCtrl.getDetalleReferenciaById /* #swagger.tags = ['DetalleReferencia'] */
);
router.post(
  '/',
  detalleReferenciasCtrl.createDetalleReferencia
  /* 
   #swagger.tags = ['DetalleReferencia'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/DetalleReferencia" }
}
  */
);
router.put(
  '/:id',
  detalleReferenciasCtrl.updateDetalleReferenciaById
  /* #swagger.tags = ['DetalleReferencia'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/DetalleReferencia" }
}
  */
);
router.delete(
  '/:id',
  detalleReferenciasCtrl.deleteDetalleReferenciaById /* #swagger.tags = ['DetalleReferencia'] */
);

export default router;
