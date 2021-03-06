import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { validate } from 'class-validator';

import Logger from '../../lib/logger';
import { User } from '../entity/User';
import jwtConfig from '../../lib/jwt';

class AuthController {
  static login = async (req: Request, res: Response) => {
    // ? Check if email and password are set
    const { email, password } = req.body;
    if (!(email && password)) {
      Logger.error(res.status(400).send());
    }

    // ? Get user from database
    const userRepository = getRepository(User);

    try {
      const user = await userRepository.findOneOrFail({ where: { email } });

      // ? Check if encrypted password match
      if (!user.checkIfUnencryptedPasswordIsValid(password)) {
        Logger.error(res.status(401).send());
        return;
      }

      //* Sing JWT, valid for 1 hour
      const token = jwt.sign(
        { userId: user.id, username: user.email },
        jwtConfig.jwtSecret,
        { expiresIn: '1h' },
      );

      // ? Send the jwt in the response
      res.send(token);
    } catch (error) {
      Logger.error(res.status(401).send());
    }
  };

  static changePassword = async (req: Request, res: Response) => {
    // ? Get ID from JWT
    const id = res.locals.jwtPayload.userId;

    // ? Get parameters from the body
    const { oldPassword, newPassword } = req.body;
    if (!(oldPassword && newPassword)) {
      Logger.error(res.status(400).send());
    }

    // ? Get user from the database
    const userRepository = getRepository(User);
    let user: User;

    try {
      user = await userRepository.findOneOrFail(id);

      // ? Check if old password matchs
      if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
        Logger.error(res.status(401).send());
        return;
      }

      // ? Validate de model (password lenght)
      user.password = newPassword;
      const errors = await validate(user);
      if (errors.length > 0) {
        Logger.error(res.status(400).send(errors));
        return;
      }

      // Hash the new password and save
      user.hashPassword();
      userRepository.save(user);
    } catch (id) {
      Logger.error(res.status(401).send());
    }
    Logger.warn(res.status(204).send());
  };
}
export default AuthController;
