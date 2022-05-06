import { Router } from 'express';
import * as especificacionCtrl from '../controllers/Beneficio_has_punto-Controller';

const router = Router();
router.get(
  '/',
  especificacionCtrl.getEspecificacionesPrograma /* #swagger.tags = ['Beneficio_has_punto']*/
);

router.get(
  '/:id',
  especificacionCtrl.getEspecificacionesProgramaId /* #swagger.tags = ['Beneficio_has_punto']*/
);

router.post(
  '/',
  especificacionCtrl.createEspecificaciones
  /* #swagger.tags = ['Beneficio_has_punto']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Beneficio_has_punto" }
    }
*/
);

router.put(
  '/:id',
  especificacionCtrl.updateEspecificaionId
  /* #swagger.tags = ['Beneficio_has_punto']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Beneficio_has_punto" }
    }
*/
);
router.delete(
  '/:id',
  especificacionCtrl.deleteEspecificacionById /* #swagger.tags = ['Beneficio_has_punto']*/
);

export default router;
