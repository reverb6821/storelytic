module.exports = app => {
  const users = require('../controllers/user.controller.js');
  const { authJwt } = require('../middleware')

  var router = require('express').Router();

  router.get('/',[authJwt.verifyToken, authJwt.isAdmin],  users.findAll);
  router.get('/:id', [authJwt.verifyToken, authJwt.isAdmin], users.findOne);
  router.put('/:id', [authJwt.verifyToken, authJwt.isAdmin],  users.update);
  router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], users.delete);

  app.use('/api/v2/users', router);
};