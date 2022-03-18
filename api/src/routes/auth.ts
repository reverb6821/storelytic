import { Router } from 'express';
import AuthController from '../controller/AuthController';
import { checkJwt } from '../middlewares/checkJwt';

const router = Router();
// Login route
router.post('/auth/sign-in', AuthController.login);

// Change my password
router.post('/auth/change-password', [checkJwt], AuthController.changePassword);

export default router;
