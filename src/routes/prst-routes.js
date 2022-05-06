import * as prstsCtrl from '../controllers/prst-controller';
import { Router } from 'express';

const router = Router();

router.get('/', prstsCtrl.getPrsts /* #swagger.tags = ['Prst'] */);
router.get('/:id', prstsCtrl.getPrstById /* #swagger.tags = ['Prst'] */);
router.post('/', prstsCtrl.createPrst
  /*
  #swagger.tags = ['Prst']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Prst" }
    }
  */);
router.put('/:id', prstsCtrl.updatePrstById
  /*
  #swagger.tags = ['Prst']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Prst" }
    }
  */);
router.delete('/:id', prstsCtrl.deletePrstById /* #swagger.tags = ['Prst'] */);

export default router;