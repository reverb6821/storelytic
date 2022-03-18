import { Router } from 'express';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';
import { uploadImage } from '../middlewares/multer';
import CompanyController from '../controller/CompanyController';

const companyRouter = Router();

companyRouter.get(
  '/companies',
  [checkJwt, checkRole(['ADMIN', 'USER'])],
  CompanyController.listAll,
);

companyRouter.get(
  '/companies/:id',
  [checkJwt, checkRole(['ADMIN', 'USER'])],
  CompanyController.getOneById,
);

companyRouter.post(
  '/companies',
  [checkJwt, checkRole(['ADMIN']), uploadImage.single('avatar')],
  CompanyController.newCompany,
);

companyRouter.patch(
  '/companies/:id',
  [checkJwt, checkRole(['ADMIN'])],
  CompanyController.editCompany,
);

companyRouter.delete(
  '/companies/:id',
  [checkJwt, checkRole(['ADMIN'])],
  CompanyController.deleteCompany,
);

export default companyRouter;
