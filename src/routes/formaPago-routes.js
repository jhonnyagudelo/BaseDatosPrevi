import { Router } from 'express';
import * as formaPagoCtrl from '../controllers/formaPago-controller';

const router = Router();

router.get('/', formaPagoCtrl.getFormaPago /* #swagger.tags = ['FormaPago'] */);
router.get('/:id', formaPagoCtrl.getFormaPagoById /* #swagger.tags = ['FormaPago'] */);
router.post('/', formaPagoCtrl.createFormaPago
  /*
  #swagger.tags = ['FormaPago']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/FormaPago" }
    }
  */);
router.put('/:id', formaPagoCtrl.updateFormaPagoById
  /*
  #swagger.tags = ['FormaPago']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/FormaPago" }
    }
  */);
router.delete('/:id', formaPagoCtrl.deleteFormaPagoById /* #swagger.tags = ['FormaPago'] */);

export default router;
