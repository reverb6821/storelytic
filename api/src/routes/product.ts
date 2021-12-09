import { Router } from 'express';
import ProductController from '../controller/ProductController';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';

  const productRouter = Router();

  productRouter.get('/productlist', [checkJwt, checkRole(['ADMIN'])], ProductController.listAll);

  productRouter.get(
    '/product:id([0-9]+)',
    [checkJwt, checkRole(['ADMIN'])],
    ProductController.getOneById
  );

  productRouter.post('/newproduct', [checkJwt, checkRole(['ADMIN'])], ProductController.newProduct);

  productRouter.patch(
    '/editproduct:id([0-9]+)',
    [checkJwt, checkRole(['ADMIN'])],
    ProductController.editProduct
  );

  productRouter.delete(
    '/deleteproduct:id([0-9]+)',
    [checkJwt, checkRole(['ADMIN'])],
    ProductController.deleteProduct
  );

  export default productRouter;