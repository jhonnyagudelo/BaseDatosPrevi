import * as seguridadSocialCtrl from '../controllers/seguridad-social';
import { Router } from 'express';

const router = Router();

router.get('/', seguridadSocialCtrl.getSeguridadSocial /* #swagger.tags = ['SeguridadSocial'] */);
router.get('/:id', seguridadSocialCtrl.getSeguridadSocialById /* #swagger.tags = ['SeguridadSocial'] */);
router.post('/', seguridadSocialCtrl.createSeguridadSocialById
  /*
  #swagger.tags = ['SeguridadSocial']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/SeguridadSocial" }
    }
  */);
router.put('/:id', seguridadSocialCtrl.updateSeguridadSocialById
  /*
  #swagger.tags = ['SeguridadSocial']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/SeguridadSocial" }
    }
  */);
router.delete('/:id', seguridadSocialCtrl.deleteSeguridadSocialById /* #swagger.tags = ['SeguridadSocial'] */);

export default router;