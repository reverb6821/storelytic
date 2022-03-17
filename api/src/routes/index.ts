import { Router, Request, Response } from 'express';
import Logger from '../../lib/logger';

import auth from './auth';
import user from './user';
import prod from './product';
import warehouse from './warehouse';
import company from './company';

export const router = Router(); // ? declare express as router

// router.use('/users', user);//<-
//! api endpoint
//* home
router.get('/', async (req: Request, res: Response): Promise<any> => {
  try {
    res.status(200).send({ success: true, message: 'API SERVER STARTED ' });
  } catch (error) {
    Logger.error(
      res
        .status(500)
        .send({ success: false, message: `ERROR: ${error}`, data: null }),
    );
  }
});

//* user
router.use('/v2/api-server', user);
// router.get('/users' user );

//* auth
router.use('/v2/api-server', auth);

//* product
router.use('/v2/api-server', prod);

//* warehouse
router.use('/v2/api-server', warehouse);

//* company
router.use('/v2/api-server', company);
