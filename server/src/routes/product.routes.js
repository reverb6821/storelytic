module.exports = app => {
    const products = require('../controllers/product.controller.js');
    const { authJwt } = require('../middleware')

    var router = require('express').Router();
  
    router.post('/', [authJwt.verifyToken, authJwt.isModerator, authJwt.isAdmin], products.create);
    router.get('/', [authJwt.verifyToken], products.findAll);
    router.get('/stock', [authJwt.verifyToken], products.findAllCompleted);
    router.get('/:id', [authJwt.verifyToken, authJwt.isModerator, authJwt.isAdmin], products.findOne);
    router.put('/:id', [authJwt.verifyToken, authJwt.isModerator, authJwt.isAdmin], products.update);
    router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], products.delete);
    router.delete('/', [authJwt.verifyToken, authJwt.isAdmin], products.deleteAll);
  
    app.use('/api/v1/tasks', router);
  };