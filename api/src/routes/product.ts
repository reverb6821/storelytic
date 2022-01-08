import { Router } from 'express';
import ProductController from '../controller/ProductController';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';

const productRouter = Router();

productRouter.get('/productslist', [checkJwt, checkRole(['ADMIN', 'USER'])], ProductController.listAll);

productRouter.get(
  '/product:id([0-9]+)',
  [checkJwt, checkRole(['ADMIN', 'USER'])],
  ProductController.getOneById,
);

productRouter.post('/newproduct', [checkJwt, checkRole(['ADMIN', 'USER'])], ProductController.newProduct);

productRouter.patch(
  '/editproduct:id([0-9]+)',
  [checkJwt, checkRole(['ADMIN', 'USER'])],
  ProductController.editProduct,
);

productRouter.delete(
  '/deleteproduct:id([0-9]+)',
  [checkJwt, checkRole(['ADMIN', 'USER'])],
  ProductController.deleteProduct,
);

export default productRouter;
