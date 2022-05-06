import { Router } from 'express';
import * as microempresaCtrl from '../controllers/microEmpresa-controller';

const router = Router();
router.get('/', microempresaCtrl.getMiEmpresa /* #swagger.tags = ['MicroEmpresa'] */);
router.get('/:id', microempresaCtrl.getMiEmpresaById /* #swagger.tags = ['MicroEmpresa'] */);
router.post('/', microempresaCtrl.createMiEmpresa
  /*
  #swagger.tags = ['MicroEmpresa']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/MicroEmpresa" }
    }
  */);
router.put('/:id', microempresaCtrl.updateMiEmpresa
  /*
  #swagger.tags = ['MicroEmpresa']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/MicroEmpresa" }
    }
  */);
router.delete('/:id', microempresaCtrl.deleteMiEmpresa /* #swagger.tags = ['MicroEmpresa'] */);

export default router;
