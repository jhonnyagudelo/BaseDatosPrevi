import { Router } from 'express';
import * as detalleCredencialCtrl from '../controllers/detalleCredencial-controller';

const router = Router();

router.get(
  '/exportacion-carnet/:numero',
  detalleCredencialCtrl.exportacionDatos /* #swagger.tags = ['DetalleCredencial']  */
);

router.get(
  '/',
  detalleCredencialCtrl.getDetalleCredencial /* #swagger.tags = ['DetalleCredencial'] */
);
router.get(
  '/:id',
  detalleCredencialCtrl.getDetalleCredencialById /* #swagger.tags = ['DetalleCredencial'] */
);
router.post(
  '/',
  detalleCredencialCtrl.createDetalleCredencial
  /* 
   #swagger.tags = ['DetalleCredencial'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/DetalleCredencial" }
}
  */
);
router.put(
  '/:id',
  detalleCredencialCtrl.updateDetalleCredencialById
  /* 
   #swagger.tags = ['DetalleCredencial'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/DetalleCredencial" }
}
  */
);
router.delete(
  '/:id',
  detalleCredencialCtrl.deleteDetalleCredencial /* #swagger.tags = ['DetalleCredencial'] */
);

export default router;
