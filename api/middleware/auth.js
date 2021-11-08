const authJwt = require('./authJwt')
const verifySignUp = require('./verifySignUp')

//! export auth middleware
module.exports = {
  authJwt,
  verifySignUp
}
