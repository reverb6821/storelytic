import { Router, Request, Response } from 'express';
import Logger from '../../lib/logger';

import auth from "./auth";
import user from "./user";

export const router = Router(); //? declare express as router

// router.use('/users', user);//<-
//! api endpoint
//* home
router.get('/', async (req: Request, res: Response): Promise<any> => {
    try {
        res.status(200).send({ success: true, message: 'API SERVER STARTED '});
    } catch (error) {
        Logger.error(res.status(500).send({ success: false, message: `ERROR: ${error}`, data: null}));
    }
});

//* user
router.use('/users', user);
// router.get('/users' user );

//* auth
router.use('/auth', auth);
