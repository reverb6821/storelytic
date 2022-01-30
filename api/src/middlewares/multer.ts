import multer from 'multer';
import { Request } from 'express';

const fileFilter = (req: Request, file: any, cb: any) => {
  if (file.mimetype === 'image/jpg'
       || file.mimetype === 'image/jpeg'
       || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Image uploaded is not of type jpg/jpeg or png'), false);
  }
};

export const uploadImage = multer({ fileFilter });
