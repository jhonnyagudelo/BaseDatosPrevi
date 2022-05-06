import { Router } from 'express';
import * as aseguradosCtrl from '../controllers/asegurado-controller';

const router = Router();

router.get(
  '/',
  aseguradosCtrl.getAsegurados
  /*
  #swagger.tags = ['Asegurado']
  */
);
router.get(
  '/:id',
  aseguradosCtrl.getAseguradoById
  /*
  #swagger.tags = ['Asegurado']
  */
);
router.post(
  '/',
  aseguradosCtrl.agregar_beneficiario
  /*
  #swagger.tags = ['Asegurado']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Asegurado" }
    }
  */
);
router.put(
  '/:id',
  aseguradosCtrl.updateAseguradoById
  /*
  #swagger.tags = ['Asegurado']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Asegurado" }
    }
  */
);
router.delete(
  '/:id',
  aseguradosCtrl.deleteAseguradosById
  /*
  #swagger.tags = ['Asegurado']
  */
);

router.get(
  '/find-by-cupo-id/:cupoId',
  aseguradosCtrl.getAseguradoByCupo /*
  #swagger.tags = ['Asegurado']
  */
);

export default router;
