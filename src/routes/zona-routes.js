import { Router } from 'express';
import * as zonaCtrl from '../controllers/zona-controller';

const router = Router();

router.get('/', zonaCtrl.getZona /* #swagger.tags = ['Zona'] */);
router.get('/:id', zonaCtrl.getZonaById /* #swagger.tags = ['Zona'] */);
router.post(
  '/',
  zonaCtrl.createZona
  /*
  #swagger.tags = ['Zona']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Zona" }
    }
  */
);
router.put(
  '/:id',
  zonaCtrl.updateZonaById
  /*
  #swagger.tags = ['Zona']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Zona" }
    }
  */
);
router.delete('/:id', zonaCtrl.deleteZonaById /* #swagger.tags = ['Zona'] */);

router.get(
  '/find-by-municipio-id/:municipioId',
  zonaCtrl.zonaByMuniciopio
  /* #swagger.tags = ['Zona'] */
);

export default router;
