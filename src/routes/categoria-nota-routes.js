import { Router } from 'express';
import * as categoriaNotaCtrl from '../controllers/categoria-nota-controller';

const router = Router();

router.get(
  '/',
  categoriaNotaCtrl.getCategoriaNotas
  /* #swagger.tags = ['CategoriaNota'] */
);
router.get(
  '/:id',
  categoriaNotaCtrl.getCategoriaNotaById /* #swagger.tags = ['CategoriaNota'] */
);
router.post(
  '/',
  categoriaNotaCtrl.createCategoriaNota
  /* 
   #swagger.tags = ['CategoriaNota'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/CategoriaNota" }
}
  */
);
router.put(
  '/:id',
  categoriaNotaCtrl.updateCategoriaNotaById
  /* 
    #swagger.tags = ['CategoriaNota'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/CategoriaNota" }
}
  */
);
router.delete(
  '/:id',
  categoriaNotaCtrl.deleteCatagoriaNotaById /* #swagger.tags = ['CategoriaNota'] */
);

export default router;

