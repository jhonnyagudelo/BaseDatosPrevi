import * as kardexCtrl from '../controllers/kardex-controller';
import { Router } from 'express';

const router = Router();

router.get('/', kardexCtrl.getKardex /* #swagger.tags = ['Kardex'] */);
router.get('/:id', kardexCtrl.getKardexById /* #swagger.tags = ['Kardex'] */);
router.post('/', kardexCtrl.createKardex
  /*
  #swagger.tags = ['Kardex']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Kardex" }
    }
  */);
router.put('/:id', kardexCtrl.updateKardexById
  /*
  #swagger.tags = ['Kardex']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Kardex" }
    }
  */);
router.delete('/:id', kardexCtrl.deleteKardexById /* #swagger.tags = ['Kardex'] */);

export default router;