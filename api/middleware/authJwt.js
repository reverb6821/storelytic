const jwt = require('jsonwebtoken')
const config = require('../config/authConfig')
const db = require('../models/sequelize')
const User = db.user

//* check token
verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token']

  //* if no token was provided
  if (!token) {
    return res.status(403).send({
      message: 'No token provided!'
    })
  }

  //* if the token is invalid
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized!'
      })
    }
    req.userId = decoded.id
    next()
  })
}

//* check if it is admin
isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'admin') {
          next()
          return
        }
      }

      res.status(403).send({
        message: 'Require Admin Role!'
      })
    })
  })
}

//* check if it is mod
isModerator = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'moderator') {
          next()
          return
        }
      }

      res.status(403).send({
        message: 'Require Moderator Role!'
      })
    })
  })
}

//* check if it is admin or mod
isModeratorOrAdmin = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'moderator') {
          next()
          return
        }

        if (roles[i].name === 'admin') {
          next()
          return
        }
      }

      res.status(403).send({
        message: 'Require Moderator or Admin Role!'
      })
    })
  })
}

//* export auth token
const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isModerator: isModerator,
  isModeratorOrAdmin: isModeratorOrAdmin
}
module.exports = authJwt
