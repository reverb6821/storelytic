import { Router, Request, Response } from 'express';
import Logger from '../lib/logger';
import auth from './auth';
import user from './user';

export const router = Router(); // ? declare express as router

//! api endpoint
//* user
router.get('/auth', auth);
router.get('/user', user);

//* home
router.get('/', async (req: Request, res: Response): Promise<any> => {
  try {
    res.status(200).send({ success: true, message: 'API SERVER STARTED ' });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `ERROR: ${error}`,
      data: null,
    });
  }
});

//* api
router.get('/api', async (req: Request, res: Response): Promise<any> => {
  try {
    res.status(200).send({ message: 'Andromeda' });
  } catch (error) {
    Logger.error(
      res.status(400).send({
        success: false,
        message: `ERROR: ${error}`,
        data: null,
      }),
    );
  }
});

