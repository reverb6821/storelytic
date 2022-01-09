import { Router } from 'express';
import UserController from '../controller/UserController';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';

const userRouter = Router();

// Get all users
userRouter.get('/userslist', [checkJwt, checkRole(['ADMIN', 'USER'])], UserController.listAll);

// Get one user
userRouter.get(
  '/user:id([0-9]+)',
  [checkJwt, checkRole(['ADMIN', 'USER'])],
  UserController.getOneById,
);

// Create a new user
userRouter.post('/newuser', [checkJwt, checkRole(['ADMIN'])], UserController.newUser);

// Edit one user
userRouter.patch(
  '/edituser:id([0-9]+)',
  [checkJwt, checkRole(['ADMIN'])],
  UserController.editUser,
);

// Delete one user
userRouter.delete(
  '/deleteuser:id([0-9]+)',
  [checkJwt, checkRole(['ADMIN'])],
  UserController.deleteUser,
);

export default userRouter;
