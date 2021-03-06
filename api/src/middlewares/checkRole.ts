import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../entity/User';

export const checkRole = (roles: Array<number>) => async (req: Request, res: Response, next: NextFunction) => {
  // Get the user ID from previous midleware
  const id = res.locals.jwtPayload.userId;

  // Get user role from the database
  const userRepository = getRepository(User);
  try {
    const user = await userRepository.findOneOrFail(id);
    // Check if array of authorized roles includes the user's role
    if (roles.includes(user.role)) next();
    else res.status(401).send();
  } catch (id) {
    res.status(401).send();
  }
};
