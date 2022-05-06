import * as cProductoCtrl from '../controllers/c-producto-controller';
import { Router } from 'express';

const router = Router();

router.get(
  '/',
  cProductoCtrl.getCProductos /* #swagger.tags = ['CategoriaProducto'] */
);
router.get(
  '/:id',
  cProductoCtrl.getProductoById /* #swagger.tags = ['CategoriaProducto'] */
);
router.post(
  '/',
  cProductoCtrl.createCProducto
  /* 
   #swagger.tags = ['CategoriaProducto'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/CategoriaProducto" }
    }
  */
);
router.put(
  '/:id',
  cProductoCtrl.updateCProductoById
  /* 
    #swagger.tags = ['CategoriaProducto']
     #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/CategoriaProducto" }
    }
  */
);
router.delete(
  '/:id',
  cProductoCtrl.deleteCProductoById /* #swagger.tags = ['CategoriaProducto'] */
);

export default router;

