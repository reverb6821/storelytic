import { Router } from 'express';
import UserController from '../controller/UserController';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';

const userRouter = Router();

// Get all users
userRouter.get('/users', [checkJwt, checkRole([1, 2])], UserController.listAll);

// Get one user
userRouter.get(
  '/users/:id',
  [checkJwt, checkRole([1, 2])],
  UserController.getOneById,
);

// Create a new user
userRouter.post(
  '/users',
  [checkJwt, checkRole([1])],
  UserController.newUser,
);

// Edit one user
userRouter.patch(
  '/users/:id',
  [checkJwt, checkRole([1])],
  UserController.editUser,
);

// Delete one user
userRouter.delete(
  '/users/:id',
  [checkJwt, checkRole([1])],
  UserController.deleteUser,
);

export default userRouter;
