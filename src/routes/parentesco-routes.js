import { Router } from 'express';
import * as parentescoCtrl from '../controllers/parentesco-controller';

const router = Router();

router.get('/', parentescoCtrl.getParentescos /* #swagger.tags = ['Parentesco'] */);
router.get('/:id', parentescoCtrl.getParentescoById /* #swagger.tags = ['Parentesco'] */);
router.post('/', parentescoCtrl.createParenteco
  /*
  #swagger.tags = ['Parentesco']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Parentesco" }
    }
  */);
router.put('/:id', parentescoCtrl.updateParentesco
  /*
  #swagger.tags = ['Parentesco']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Parentesco" }
    }
  */);
router.delete('/:id', parentescoCtrl.deleteParentesco /* #swagger.tags = ['Parentesco'] */);

export default router;
