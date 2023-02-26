module.exports = app => {
    const products = require('../controllers/product.controller.js');
    const { authJwt } = require('../middleware')

    var router = require('express').Router();
  
    router.post('/', [authJwt.verifyToken, authJwt.isAdminOrSuperAdmin], products.create);
    router.get('/',[authJwt.verifyToken], products.findAll);
    router.get('/stock',[authJwt.verifyToken], products.findAllStocked);
    router.get('/:id',[authJwt.verifyToken], products.findOne);
    router.put('/:id', [authJwt.verifyToken, authJwt.isAdminOrSuperAdmin], products.update);
    router.delete('/:id', [authJwt.verifyToken, authJwt.isAdminOrSuperAdmin], products.delete);
    router.delete('/', [authJwt.verifyToken, authJwt.isSuperAdmin], products.deleteAll);
  
    app.use('/api/v2/products', router);
  };