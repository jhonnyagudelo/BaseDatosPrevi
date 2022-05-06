import { Router } from 'express';
import * as cupoCtrl from '../controllers/cupo-controller';

const router = Router();

router.get('/contador', cupoCtrl.getExperimento /* #swagger.tags = ['Cupo'] */);
router.get('/', cupoCtrl.getCupo /* #swagger.tags = ['Cupo'] */);
router.get('/:id', cupoCtrl.getCupoByid /* #swagger.tags = ['Cupo'] */);
router.post(
  '/',
  cupoCtrl.createCupo
  /* 
   #swagger.tags = ['Cupo'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Cupo" }
}
  */
);
router.put(
  '/:id',
  cupoCtrl.updateCupoById
  /* 
   #swagger.tags = ['Cupo'] 
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Cupo" }
}
*/
);

//router.delete('/:id', cupoCtrl.deleteCupoById);
export default router;
