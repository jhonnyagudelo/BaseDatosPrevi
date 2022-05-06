import { Router } from 'express';
import * as objecionesCtrl from '../controllers/objecion-controller';

const router = Router();

router.get(
  '/',
  objecionesCtrl.getObjeciones /* #swagger.tags = ['Objecion'] */
);
router.get(
  '/find-by-categoria-id/:categoriaId',
  objecionesCtrl.getCategoriaByObjecion /* #swagger.tags = ['Objecion'] */
);
router.get(
  '/:id',
  objecionesCtrl.getObjecionById /* #swagger.tags = ['Objecion'] */
);
router.post(
  '/',
  objecionesCtrl.createObjecion
  /*
  #swagger.tags = ['Objecion']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Objecion" }
    }
  */
);
router.put(
  '/:id',
  objecionesCtrl.updateObjecion
  /*
  #swagger.tags = ['Objecion']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Objecion" }
    }
  */
);
router.delete(
  '/:id',
  objecionesCtrl.deleteObjecion /* #swagger.tags = ['Objecion'] */
);

export default router;
