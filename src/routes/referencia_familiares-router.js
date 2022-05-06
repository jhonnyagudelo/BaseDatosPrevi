import { Router } from 'express';
import * as refeFamiliaresCtrl from '../controllers/referencia-familiar-controller';

const router = Router();

router.get('/', refeFamiliaresCtrl.getRefeFamiliar /* #swagger.tags = ['ReferenciaFamiliar'] */);
router.get('/:id', refeFamiliaresCtrl.getRefeFamiliarById /* #swagger.tags = ['ReferenciaFamiliar'] */);
router.post('/', refeFamiliaresCtrl.createRefeFamilia
  /*
  #swagger.tags = ['ReferenciaFamiliar']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/ReferenciaFamiliar" }
    }
  */);
router.put('/:id', refeFamiliaresCtrl.updateRefeFamiliarById
  /*
  #swagger.tags = ['ReferenciaFamiliar']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/ReferenciaFamiliar" }
    }
  */);
router.delete('/:id', refeFamiliaresCtrl.deleteRefeFamiliarById /* #swagger.tags = ['ReferenciaFamiliar'] */);

export default router;
