import { Router } from 'express';
import * as vehiculoCtrl from '../controllers/vehiculo-controller';

const router = Router();

router.get('/', vehiculoCtrl.getVehiculos /* #swagger.tags = ['Vehiculo'] */);
router.get('/:id', vehiculoCtrl.getVehiculoById /* #swagger.tags = ['Vehiculo'] */);
router.post('/', vehiculoCtrl.createVehiculo
  /*
  #swagger.tags = ['Vehiculo']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Vehiculo" }
    }
  */);
router.put('/:id', vehiculoCtrl.updateVehiculoById
  /*
  #swagger.tags = ['Vehiculo']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Vehiculo" }
    }
  */);
router.delete('/:id', vehiculoCtrl.deleteVehiculoById /* #swagger.tags = ['Vehiculo'] */);

export default router;