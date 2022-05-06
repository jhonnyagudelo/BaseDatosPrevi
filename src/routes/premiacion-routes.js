import { Router } from 'express';
import * as premiacionesCtrl from '../controllers/premiacion-controller';

const router = Router();

router.get('/', premiacionesCtrl.getPremiaciones /* #swagger.tags = ['Premiacion'] */);
router.get('/:id', premiacionesCtrl.getPremiacionById /* #swagger.tags = ['Premiacion'] */);
router.post('/', premiacionesCtrl.createPremiacion
  /*
  #swagger.tags = ['Premiacion']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Premiacion" }
    }
  */);
router.put('/:id', premiacionesCtrl.updatePremiacionById
  /*
  #swagger.tags = ['Premiacion']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Premiacion" }
    }
  */);
router.delete('/:id', premiacionesCtrl.deletePremiacionById /* #swagger.tags = ['Premiacion'] */);

export default router;