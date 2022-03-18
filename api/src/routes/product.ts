import { Router } from 'express';
import ProductController from '../controller/ProductController';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';
import { uploadImage } from '../middlewares/multer';

const productRouter = Router();

productRouter.get(
  '/products',
  [checkJwt, checkRole(['ADMIN', 'USER'])],
  ProductController.listAll,
);

productRouter.get(
  '/products/:id',
  [checkJwt, checkRole(['ADMIN', 'USER'])],
  ProductController.getOneById,
);

productRouter.post(
  '/products',
  [checkJwt, checkRole(['ADMIN', 'USER']), uploadImage.single('avatar')],
  ProductController.newProduct,
);

productRouter.patch(
  '/products/:id',
  [checkJwt, checkRole(['ADMIN', 'USER'])],
  ProductController.editProduct,
);

productRouter.delete(
  '/products/:id',
  [checkJwt, checkRole(['ADMIN', 'USER'])],
  ProductController.deleteProduct,
);

export default productRouter;
