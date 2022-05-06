import { Router } from 'express';
import * as origenCtrl from '../controllers/origen-controller';

const router = Router();

router.get('/', origenCtrl.getOrigenes /* #swagger.tags = ['Origen'] */);
router.get('/:id', origenCtrl.getOrigenById /* #swagger.tags = ['Origen'] */);
router.post('/', origenCtrl.createOrigen
  /*
  #swagger.tags = ['Origen']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Origen" }
    }
  */);
router.put('/:id', origenCtrl.updateOrigenById
  /*
  #swagger.tags = ['Origen']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Origen" }
    }
  */);
router.delete('/:id', origenCtrl.deleteOrigenById /* #swagger.tags = ['Origen'] */);

export default router;