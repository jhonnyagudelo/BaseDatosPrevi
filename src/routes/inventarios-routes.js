import * as inventariosCtrl from '../controllers/inventario-cotroller';
import { Router } from 'express';

const router = Router();

router.get('/', inventariosCtrl.getInventarios /* #swagger.tags = ['Inventario'] */);
router.get('/:id', inventariosCtrl.getInventarioById /* #swagger.tags = ['Inventario'] */);
router.post('/', inventariosCtrl.createInventario
  /*
  #swagger.tags = ['Inventario']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Inventario" }
    }
  */);
router.put('/:id', inventariosCtrl.updateInventarioById
  /*
  #swagger.tags = ['Inventario']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Inventario" }
    }
  */);
router.delete('/:id', inventariosCtrl.deleteInventarioById /* #swagger.tags = ['Inventario'] */);

export default router;