import { Router } from 'express';
import * as productosCtrl from '../controllers/producto-controller';

const router = Router();

router.get('/', productosCtrl.getProductos /* #swagger.tags = ['Producto'] */);
router.get(
  '/:id',
  productosCtrl.getProductoById /* #swagger.tags = ['Producto'] */
);
router.post(
  '/',
  productosCtrl.createProducto
  /*
  #swagger.tags = ['Producto']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Producto" }
    }
  */
);
router.put(
  '/:id',
  productosCtrl.updateProductoById
  /*
  #swagger.tags = ['Producto']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Producto" }
    }
  */
);
router.delete(
  '/:id',
  productosCtrl.deleteProductoById /* #swagger.tags = ['Producto'] */
);

router.post(
  '/create-references-pipelines',
  productosCtrl.referenciaProducto /* #swagger.tags = ['Producto']*/
);
export default router;
