import { Router } from 'express';
import * as authCtrl from '../controllers/auth-controller';

const router = Router();

router.post('/signin', authCtrl.signIn
  /*
  #swagger.tags = ['Authorization']
  */);
router.post('/signup', authCtrl.signUp /*
  #swagger.tags = ['Authorization']
  #swagger.parameters['obj'] = {
            name: 'obj',
            in: 'body',
            required: false,
            schema: { $ref: "#/definitions/Authorization" }
    }
  */);

export default router;