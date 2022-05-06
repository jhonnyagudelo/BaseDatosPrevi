import { Router } from 'express';
import * as categoriaBeneficioCtrl from '../controllers/categoria-beneficio-controller';

const router = Router();

router.get(
  '/',
  categoriaBeneficioCtrl.getCategoriaBeneficios /* #swagger.tags = ['CategoriaBeneficio'] */
);
router.get(
  '/:id',
  categoriaBeneficioCtrl.getCategoriaBeneficioById /* #swagger.tags = ['CategoriaBeneficio'] */
);
router.post(
  '/',
  categoriaBeneficioCtrl.createCategoriaBeneficio
  /* 
   #swagger.tags = ['CategoriaBeneficio'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/CategoriaBeneficio" }
}
  */
);
router.put(
  '/:id',
  categoriaBeneficioCtrl.updateCategoriaBeneficioById
  /* 
   #swagger.tags = ['CategoriaBeneficio'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/CategoriaBeneficio" }
}
  */
);
router.delete(
  '/:id',
  categoriaBeneficioCtrl.deleteCategoriaBeneficioById /* #swagger.tags = ['CategoriaBeneficio'] */
);

export default router;

