import { Router } from 'express';
import * as c_movimiento from '../controllers/cartera_movimiento-controller';

const router = Router();

router.get(
  '/',
  c_movimiento.getCarteraMovimiento
  /*
   #swagger.tags = [ 'CarteraMovimiento' ]
   */
);

//router.get('/:cartera_id', c_movimiento.)

router.get(
  '/cartera/:carteraId',
  c_movimiento.carteraByMovimiento
  /*
   #swagger.tags = [ 'CarteraMovimiento' ]
   */
);

router.get(
  '/historial/:id',
  c_movimiento.getHistorial
  /*
   #swagger.tags = [ 'CarteraMovimiento' ]
   */
);
router.get(
  '/saldo/:id',
  c_movimiento.getSaldo
  /*
   #swagger.tags = [ 'CarteraMovimiento' ]
   */
);

export default router;
