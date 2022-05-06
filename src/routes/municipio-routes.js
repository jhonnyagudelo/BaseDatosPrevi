import { Router } from 'express';
import * as municipioCtrl from '../controllers/municipio-controller';

const router = Router();

router.get('/', municipioCtrl.getMunicipio /* #swagger.tags = ['Municipio'] */);
router.get(
  '/:id',
  municipioCtrl.getMuniciopioById /* #swagger.tags = ['Municipio'] */
);
router.post(
  '/',
  municipioCtrl.createMunicipio
  /*
  #swagger.tags = ['Municipio']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Municipio" }
    }
  */
);
router.put(
  '/:id',
  municipioCtrl.updateMunicipioById
  /*
  #swagger.tags = ['Municipio']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Municipio" }
    }
  */
);
router.delete(
  '/:id',
  municipioCtrl.deleteMunicipio /* #swagger.tags = ['Municipio'] */
);

router.get(
  '/find-by-departamento-id/:departamentoId',
  municipioCtrl.municipioBydepartamento
  /*
  #swagger.tags = ['Municipio']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Municipio" }
    }
  */
);

export default router;
