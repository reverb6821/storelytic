import { Router } from 'express';
import ProductController from '../controller/ProductController';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';
import { uploadImage } from '../middlewares/multer';

const productRouter = Router();

productRouter.get(
  '/products',
  [checkJwt, checkRole([1, 2])],
  ProductController.listAll,
);

productRouter.get(
  '/products/:id',
  [checkJwt, checkRole([1, 2])],
  ProductController.getOneById,
);

productRouter.post(
  '/products',
  [checkJwt, checkRole([1, 2]), uploadImage.single('avatar')],
  ProductController.newProduct,
);

productRouter.patch(
  '/products/:id',
  [checkJwt, checkRole([1, 2])],
  ProductController.editProduct,
);

productRouter.delete(
  '/products/:id',
  [checkJwt, checkRole([1, 2])],
  ProductController.deleteProduct,
);

export default productRouter;
