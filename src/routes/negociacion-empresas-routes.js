import { Router } from 'express';
import * as negociacionEmpresaCtrl from '../controllers/negociacion-empresa-controller';

const router = Router();

router.get('/', negociacionEmpresaCtrl.getNegociacionEmpresas /* #swagger.tags = ['NegociacionEmpresa'] */);
router.get('/:id', negociacionEmpresaCtrl.getNegociacionEmpresaById /* #swagger.tags = ['NegociacionEmpresa'] */);
router.post('/', negociacionEmpresaCtrl.createNegociacionEmpresa
  /*
  #swagger.tags = ['NegociacionEmpresa']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/NegociacionEmpresa" }
    }
  */);
router.put('/:id', negociacionEmpresaCtrl.updateNegociacionEmpresaById
  /*
  #swagger.tags = ['NegociacionEmpresa']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/NegociacionEmpresa" }
    }
  */);
router.delete('/:id', negociacionEmpresaCtrl.deleteNegociacionEmpresaById /* #swagger.tags = ['NegociacionEmpresa'] */);

export default router;