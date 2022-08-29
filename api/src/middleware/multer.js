const multer = require('multer');
const express = require('express');

const fileFilter = (req, file, cb) =>{
    if (
        file.mimetype === 'image/jpg'
        || file.mimetype === 'image/jpeg'
        || file.mimetype === 'image/png'
      ) {
        cb(null, true);
      } else {
        cb(new Error('Image uploaded is not of type jpg/jpeg or png'), false);
      }
}

const uploadImg = multer({fileFilter})

module.exports = uploadImg