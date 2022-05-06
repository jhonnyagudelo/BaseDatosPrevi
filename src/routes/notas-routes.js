import { Router } from 'express';
import * as notasCtrl from '../controllers/nota-controller';

const router = Router();

router.get('/', notasCtrl.getNotas /* #swagger.tags = ['Nota'] */);
router.get(
  '/find-by-nota/:cupoId',
  notasCtrl.getNotaByCupo /* #swagger.tags = ['Nota'] */
);
router.get('/:id', notasCtrl.getNotaById /* #swagger.tags = ['Nota'] */);
router.post(
  '/',
  notasCtrl.createNota
  /*
  #swagger.tags = ['Nota']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Nota" }
    }
  */
);
router.put(
  '/:id',
  notasCtrl.updateNotaById
  /*
  #swagger.tags = ['Nota']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Nota" }
    }
  */
);
router.delete('/:id', notasCtrl.deleteNotaById /* #swagger.tags = ['Nota'] */);

export default router;
