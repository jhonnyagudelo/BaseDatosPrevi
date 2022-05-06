import * as tProductosCtrl from '../controllers/t-producto-controller';
import { Router } from 'express';

const router = Router();

router.get('/', tProductosCtrl.getTProductos /* #swagger.tags = ['TipoProducto'] */);
router.get('/:id', tProductosCtrl.getTPoductoById /* #swagger.tags = ['TipoProducto'] */);
router.post('/', tProductosCtrl.createTProducto
  /*
  #swagger.tags = ['TipoProducto']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/TipoProducto" }
    }
  */);
router.put('/:id', tProductosCtrl.updateTProductoById
  /*
  #swagger.tags = ['TipoProducto']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/TipoProducto" }
    }
  */);
router.delete('/:id', tProductosCtrl.deleteTProductoById /* #swagger.tags = ['TipoProducto'] */);

export default router;