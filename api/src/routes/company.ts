import { Router } from 'express';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';
import { uploadImage } from '../middlewares/multer';
import CompanyController from '../controller/CompanyController';

const companyRouter = Router();

companyRouter.get(
  '/companies',
  [checkJwt, checkRole([1, 2])],
  CompanyController.listAll,
);

companyRouter.get(
  '/companies/:id',
  [checkJwt, checkRole([1, 2])],
  CompanyController.getOneById,
);

companyRouter.post(
  '/companies',
  [checkJwt, checkRole([1]), uploadImage.single('avatar')],
  CompanyController.newCompany,
);

companyRouter.patch(
  '/companies/:id',
  [checkJwt, checkRole([1])],
  CompanyController.editCompany,
);

companyRouter.delete(
  '/companies/:id',
  [checkJwt, checkRole([1])],
  CompanyController.deleteCompany,
);

export default companyRouter;
