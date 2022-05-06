import { Router } from 'express';
import * as contadorCtrl from '../controllers/contador_cupo-controller';
const router = Router();

router.get(
  '/',
  contadorCtrl.getContadorCupo /* #swagger.tags = ['ContadorCupo']*/
);

export default router;
