import * as mInventariosCtrl from '../controllers/m-inventario-controller';
import { Router } from 'express';

const router = Router();

router.get('/', mInventariosCtrl.getMInventario /* #swagger.tags = ['MovimientoInventario'] */);
router.get('/:id', mInventariosCtrl.getMInventarioById /* #swagger.tags = ['MovimientoInventario'] */);
router.post('/', mInventariosCtrl.createMInventario
  /*
  #swagger.tags = ['MovimientoInventario']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/MovimientoInventario" }
    }
  */);
router.put('/:id', mInventariosCtrl.updateMInventarioById
  /*
  #swagger.tags = ['MovimientoInventario']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/MovimientoInventario" }
    }
  */);
router.delete('/:id', mInventariosCtrl.deleteMInventarioById /* #swagger.tags = ['MovimientoInventario'] */);

export default router;