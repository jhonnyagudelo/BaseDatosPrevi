import { Router } from 'express';
import * as telefonosCtrl from '../controllers/telefono-controller';

const router = Router();

router.get('/', telefonosCtrl.getTelefono /* #swagger.tags = ['Telefono'] */);
router.get('/:id', telefonosCtrl.getTelefonoById /* #swagger.tags = ['Telefono'] */);
router.post('/', telefonosCtrl.createTelefono
  /*
  #swagger.tags = ['Telefono']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Telefono" }
    }
  */);
router.put('/:id', telefonosCtrl.updateTelefonoById   /*
  #swagger.tags = ['Telefono']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Telefono" }
    }
  */);
router.delete('/:id', telefonosCtrl.deleteTelefonoById /* #swagger.tags = ['Telefono'] */);

export default router;
