import { Router } from 'express';
import * as sesionesCtrl from '../controllers/sesiones-controller';

const router = Router();

router.get('/', sesionesCtrl.getSesiones /* #swagger.tags = ['Sesion'] */);
router.get('/:id', sesionesCtrl.getSesionById /* #swagger.tags = ['Sesion'] */);
router.post('/', sesionesCtrl.createSesion
  /*
  #swagger.tags = ['Sesion']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Sesion" }
    }
  */);
router.put('/:id', sesionesCtrl.updateSesionById
  /*
  #swagger.tags = ['Sesion']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Sesion" }
    }
  */);
router.delete('/:id', sesionesCtrl.deleteSesionesById /* #swagger.tags = ['Sesion'] */);

export default router;