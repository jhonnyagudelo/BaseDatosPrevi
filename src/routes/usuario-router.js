import { Router } from 'express';
import * as usuarioCtrl from '../controllers/usuario-controller';

const router = Router();
router.get('/', usuarioCtrl.getUsuarios /* #swagger.tags = ['Usuario'] */);
router.get(
  '/:id',
  usuarioCtrl.getUsuarioById /* #swagger.tags = ['Usuario'] */
);
router.post(
  '/',
  usuarioCtrl.createUsuario
  /*
  #swagger.tags = ['Usuario']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Usuario" }
    }
  */
);
router.put(
  '/:id',
  usuarioCtrl.updateUsuarioById
  /*
  #swagger.tags = ['Usuario']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Usuario" }
    }
  */
);
router.delete(
  '/:id',
  usuarioCtrl.deleteUsuarioById /* #swagger.tags = ['Usuario'] */
);
router.post(
  '/creacion-usuario-completo',
  usuarioCtrl.createByUsuarioByDetalle
  /* 
   #swagger.tags = ['Usuario'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Usuario" }
}
  */
);

export default router;
