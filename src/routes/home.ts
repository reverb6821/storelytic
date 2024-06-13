import { Request, Response } from 'express';
import Router from 'express';
import Logger from '@lib/logger.config';

const home = Router(); 

home.get('/home', async (_req: Request, res: Response) => {
    try {
      res.status(200).send({ success: true, message: 'Home 🏠' });
    } catch (error) {
      Logger.error(
        res
          .status(500)
          .send({ success: false, message: `🔴 ERROR: ${error}`, data: null }),
      );
    }
});

home.get('/healthchecker', (_req: Request, res: Response) => {
  try {
    res.status(200).send({ success: true, message: 'Server is working 🧑‍🔧🟢' });
  } catch (error) {
    Logger.error(
      res
        .status(500)
        .send({ success: false, message: `🔴 ERROR: ${error}`, data: null }),
    );
  }
});


export default home