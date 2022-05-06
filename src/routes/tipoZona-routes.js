import { Router } from 'express';
import * as tipoZonaCtrl from '../controllers/tipoZona-controller';

const router = Router();
router.get('/', tipoZonaCtrl.getTipoZona /* #swagger.tags = ['TipoZona'] */);
router.get('/:id', tipoZonaCtrl.getTipoZonaById /* #swagger.tags = ['TipoZona'] */);
router.post('/', tipoZonaCtrl.createTipoZona
  /*
  #swagger.tags = ['TipoZona']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/TipoZona" }
    }
  */);
router.put('/:id', tipoZonaCtrl.updateTipoZona
  /*
  #swagger.tags = ['TipoZona']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/TipoZona" }
    }
  */);
router.delete('/:id', tipoZonaCtrl.deleteTipoZona /* #swagger.tags = ['TipoZona'] */);

export default router;
