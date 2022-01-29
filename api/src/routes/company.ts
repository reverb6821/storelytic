import { Router } from 'express';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';

import CompanyController from '../controller/CompanyController';
import { Upload } from '../middlewares/multer';

const companyRouter = Router();

companyRouter.get('/companieslist', [checkJwt, checkRole(['ADMIN', 'USER'])], CompanyController.listAll);

companyRouter.get(
  '/company:id([0-9]+)',
  [checkJwt, checkRole(['ADMIN', 'USER'])],
  CompanyController.getOneById,
);

companyRouter.post('/newcompany', [checkJwt, checkRole(['ADMIN']), Upload], CompanyController.newCompany);

companyRouter.patch(
  '/editcompany:id([0-9]+)',
  [checkJwt, checkRole(['ADMIN'])],
  CompanyController.editCompany,
);

companyRouter.delete(
  '/deletecompany:id([0-9]+)',
  [checkJwt, checkRole(['ADMIN'])],
  CompanyController.deleteCompany,
);

export default companyRouter;
