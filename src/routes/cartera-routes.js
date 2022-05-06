import { Router } from 'express';
import * as carteraCtrl from '../controllers/cartera-controller';

const router = Router();

router.get('/', carteraCtrl.getCartera /* #swagger.tags = ['Cartera'] */);
router.get(
  '/find-by-id/:id',
  carteraCtrl.getCarteraById /* #swagger.tags = ['Cartera'] */
);
router.get('/numero-cupo', carteraCtrl.h /* #swagger.tags = ['Cartera'] */);

export default router;
