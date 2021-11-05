import { Router } from 'express';
import express, { Request, Response } from 'express';
import Logger from '../lib/logger';

export const router = Router(); //? declare express as router

//! api endpoint
//* home
router.get('/', async (req: Request, res: Response): Promise<any> => {
    try {
        res.status(200).send({ success: true, message: 'API SERVER STARTED '});
    } catch (error) {
        res.status(500).send({ success: false, message: `ERROR: ${error}`, data: null});
    }
});

//* api
router.get('/api', async (req: Request, res: Response): Promise<any> => {
    try {
        res.status(200).send({ message: 'Andromeda'});
    } catch (error) {
        Logger.error(res.status(400).send({ success: false, message: `ERROR: ${error}`, data: null}));
    }
});