import * as mascotasCtrl from '../controllers/mascota-controller';
import { Router } from 'express';

const router = Router();

router.get('/', mascotasCtrl.getMascotas /* #swagger.tags = ['Mascota'] */);
router.get(
  '/:id',
  mascotasCtrl.getMascotaById /* #swagger.tags = ['Mascota'] */
);

router.get(
  '/find-by-mascota-cupo-id/:cupoId',
  mascotasCtrl.getMascotaByCupo /* #swagger.tags = ['Mascota'] */
);

router.post(
  '/',
  mascotasCtrl.createMascota
  /*
  #swagger.tags = ['Mascota']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Mascota" }
    }
  */
);
router.put(
  '/:id',
  mascotasCtrl.updateMascotaById
  /*
  #swagger.tags = ['Mascota']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Mascota" }
    }
  */
);
router.delete(
  '/:id',
  mascotasCtrl.deleteMascotaById /* #swagger.tags = ['Mascota'] */
);

export default router;
