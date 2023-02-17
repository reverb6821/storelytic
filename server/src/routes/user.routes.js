module.exports = app => {
  const users = require('../controllers/user.controller.js');
  const { authJwt } = require('../middleware')

  var router = require('express').Router();

  router.get('/', [authJwt.verifyToken, authJwt.isSuperAdmin], users.findAll);
  router.get('/:id', [authJwt.verifyToken, authJwt.isSuperAdmin], users.findOne);
  router.put('/:id', [authJwt.verifyToken, authJwt.isSuperAdmin],  users.update);
  router.delete('/:id', [authJwt.verifyToken, authJwt.isSuperAdmin], users.delete);

  app.use('/api/v1/users', router);
};