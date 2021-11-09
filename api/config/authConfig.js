//? token declaration
module.exports = {
  secret: process.env.JWT_SECRET,
  jwtExpiration: 3600,           // 1 hour
  jwtRefreshExpiration: 86400,   // 24 hours
};
