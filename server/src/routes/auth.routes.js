module.exports = app => {
  const { verifySignUp } = require("../middleware")
  const auth = require("../controllers/auth.controller")

    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    var router = require('express').Router()

     router.post(
    "/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    auth.signup
  );

  router.post("/signin", auth.signin);

  router.post("/refreshtoken", auth.refreshToken);

  app.use('/api/v1/auth', router)
}