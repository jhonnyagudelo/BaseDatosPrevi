import * as razasCtrl from '../controllers/raza-controller';
import { Router } from 'express';

const router = Router();

router.get('/', razasCtrl.getRazas /* #swagger.tags = ['Raza'] */);
router.get('/:id', razasCtrl.getRazaById /* #swagger.tags = ['Raza'] */);
router.get(
  '/find-by-especie-id/:especieId',
  razasCtrl.getEspecieByRaza
  /* #swagger.tags = ['Raza'] */
);
router.post(
  '/',
  razasCtrl.createRaza
  /*
  #swagger.tags = ['Raza']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Raza" }
    }
  */
);
router.put(
  '/:id',
  razasCtrl.updateRazaById
  /*
  #swagger.tags = ['Raza']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Raza" }
    }
  */
);
router.delete('/:id', razasCtrl.deleteRazaById /* #swagger.tags = ['Raza'] */);

export default router;
