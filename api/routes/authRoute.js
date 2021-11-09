const { verifySignUp } = require('../middleware/auth');
const controller = require('../controllers/authController');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.post(
    '/api/auth/signup',
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    controller.signup,
  );
  
  app.post("/api/auth/refreshtoken", controller.refreshToken); //! route for refresh tokem
  app.post('/api/auth/signin', controller.signin); //! route for signin
};
