import { Router } from 'express';
import * as detalleUsuarioCtrl from '../controllers/detalle-usuario-controller';

const router = Router();

router.get(
  '/',
  detalleUsuarioCtrl.getDetalleUsuarios /* #swagger.tags = ['DetalleUsuario'] */
);
router.get(
  '/:id',
  detalleUsuarioCtrl.getDetalleUsuarioById /* #swagger.tags = ['DetalleUsuario'] */
);
router.post(
  '/',
  detalleUsuarioCtrl.createDetalleUsuario
  /* 
   #swagger.tags = ['DetalleUsuario'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/DetalleUsuario" }
}
  * */
);

router.put(
  '/:id',
  detalleUsuarioCtrl.updateDetalleUsuarioById
  /* 
   #swagger.tags = ['DetalleUsuario'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/DetalleUsuario" }
}
  */
);
router.delete(
  '/:id',
  detalleUsuarioCtrl.deleteDetalleUsuarioById /* #swagger.tags = ['DetalleUsuario'] */
);

router.get(
  '/find-by-user-id/:usuarioId',
  detalleUsuarioCtrl.detalle_usuarioByUsuario_id
);

export default router;
