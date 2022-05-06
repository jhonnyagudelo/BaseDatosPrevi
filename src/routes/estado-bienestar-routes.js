import * as estadoBienestarCtrl from '../controllers/estado-bienestar-controller';
import { Router } from 'express';

const router = Router();

router.get(
  '/',
  estadoBienestarCtrl.getEstadoBienestar /* #swagger.tags = ['EstadoBienestar'] */
);
router.get(
  '/:id',
  estadoBienestarCtrl.getEstadoBienestarById /* #swagger.tags = ['EstadoBienestar'] */
);
router.post(
  '/',
  estadoBienestarCtrl.createEstadoBienestar
  /* 
  * #swagger.tags = ['EstadoBienestar'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/EstadoBienestar" }
            }
  * */
);
router.put(
  '/:id',
  estadoBienestarCtrl.updateEstadoBienestarById
  /* 
  * #swagger.tags = ['EstadoBienestar'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/EstadoBienestar" }
            }
  */
);
router.delete(
  '/:id',
  estadoBienestarCtrl.deleteEstadoBienestarById /* #swagger.tags = ['EstadoBienestar'] */
);

export default router;

