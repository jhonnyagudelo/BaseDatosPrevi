import { Router } from 'express';
import * as puntoBeneficiosCtrl from '../controllers/punto-beneficio-controller';

const router = Router();

router.get('/', puntoBeneficiosCtrl.getPuntoBeneficios /* #swagger.tags = ['PuntoBeneficio'] */);
router.get('/:id', puntoBeneficiosCtrl.getPuntoBeneficioById /* #swagger.tags = ['PuntoBeneficio'] */);
router.post('/', puntoBeneficiosCtrl.createPuntoBeneficio
  /*
  #swagger.tags = ['PuntoBeneficio']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/PuntoBeneficio" }
    }
  */);
router.put('/:id', puntoBeneficiosCtrl.updatePuntoBeneficioById
  /*
  #swagger.tags = ['PuntoBeneficio']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/PuntoBeneficio" }
    }
  */);
router.delete('/:id', puntoBeneficiosCtrl.deletePuntoBeneficioById /* #swagger.tags = ['PuntoBeneficio'] */);

export default router;