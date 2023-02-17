module.exports = app => {
  const users = require('../controllers/user.controller.js');
  const { authJwt } = require('../middleware')

  var router = require('express').Router();

  router.get('/', users.findAll);
  router.get('/:id', [authJwt.verifyToken], users.findOne);
  router.put('/:id', [authJwt.verifyToken, authJwt.isAdminOrSuperAdmin],  users.update);
  router.delete('/:id', [authJwt.verifyToken, authJwt.isAdminOrSuperAdmin], users.delete);

  app.use('/api/v1/users', router);
};