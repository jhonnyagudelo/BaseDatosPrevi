import * as proveedoresCtrl from '../controllers/proveedor-controller';
import { Router } from 'express';

const router = Router();

router.get('/', proveedoresCtrl.getProveedores /* #swagger.tags = ['Proveedor'] */);
router.get('/:id', proveedoresCtrl.getProveedorById /* #swagger.tags = ['Proveedor'] */);
router.post('/', proveedoresCtrl.createProveedor
  /*
  #swagger.tags = ['Proveedor']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Proveedor" }
    }
  */);
router.put('/:id', proveedoresCtrl.updateProveederById
  /*
  #swagger.tags = ['Proveedor']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Proveedor" }
    }
  */);
router.delete('/:id', proveedoresCtrl.deleteProveedorById /* #swagger.tags = ['Proveedor'] */);

export default router;