import { Router } from 'express';
import * as n_credito from '../controllers/nota-credito-controller';

const router = Router();

router.get(
  '/',
  n_credito.getNotaCredito /*
   #swagger.tags = [ 'NotaCredito' ]
   */
);

router.post(
  '/',
  n_credito.createNotaCredito
  /*
  #swagger.tags = ['NotaCredito']
  #swagger.consumes = ['multipart/form-data']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/NotaCredito" }
    }
  */
);

export default router;
