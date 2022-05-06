import * as estadoCuposCtrl from '../controllers/estado-cupo-controller';
import { Router } from 'express';

const router = Router();

router.get(
  '/',
  estadoCuposCtrl.getEstadoCupos /* #swagger.tags = ['EstadoCupo'] */
);
router.get(
  '/:id',
  estadoCuposCtrl.getEstadoCupoById /* #swagger.tags = ['EstadoCupo'] */
);
router.post(
  '/',
  estadoCuposCtrl.createEstadoCupo
  /* 
  * #swagger.tags = ['EstadoCupo'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/EstadoCupo" }
            }
  */
);
router.put(
  '/:id',
  estadoCuposCtrl.updateEstadoCupoById
  /* 
  #swagger.tags = ['EstadoCupo'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/EstadoCupo" }
            }
  */
);
router.delete(
  '/:id',
  estadoCuposCtrl.deleteEstadoCupoById /* #swagger.tags = ['EstadoCupo'] */
);

export default router;

