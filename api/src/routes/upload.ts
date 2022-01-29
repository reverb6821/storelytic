import { Router } from 'express';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';

import { Upload, getListFiles, download } from '../controller/FileController';

const uploadRouter = Router();

uploadRouter.get('/fileslist', [checkJwt, checkRole(['ADMIN', 'USER'])], getListFiles);

uploadRouter.get(
  '/file:name:id([0-9]+)',
  [checkJwt, checkRole(['ADMIN', 'USER'])],
  download,
);

uploadRouter.post('/upload', [checkJwt, checkRole(['ADMIN', 'USER'])], download);

export default uploadRouter;
