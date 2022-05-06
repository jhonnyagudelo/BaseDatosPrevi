import { Router } from 'express';
import * as perfilesCtrl from '../controllers/perfil-controller';

const router = Router();

router.get('/', perfilesCtrl.getPerfiles /* #swagger.tags = ['Perfil'] */);
router.get('/:id', perfilesCtrl.getPerfilById /* #swagger.tags = ['Perfil'] */);
router.post('/', perfilesCtrl.createPerfil
  /*
  #swagger.tags = ['Perfil']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Perfil" }
    }
  */);
router.put('/:id', perfilesCtrl.updatePerfilById
  /*
  #swagger.tags = ['Perfil']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Perfil" }
    }
  */);
router.delete('/:id', perfilesCtrl.deletePerfilById /* #swagger.tags = ['Perfil'] */);

export default router;
