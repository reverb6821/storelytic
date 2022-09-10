const jwt = require('jsonwebtoken')
const jwtSecret = require('../../config/jwtSecret')
const db = require('../models')
const User = db.user

verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token']
  if (!token) {
    return res.status(403).send({
      message: 'No token provided!'
    })
  }
  jwt.verify(token, jwtSecret.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized!'
      })
    }
    req.userId = decoded.id
    next()
  })
}

isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'ADMIN') {
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

isModerator = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'STAFF') {
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

isModeratorOrAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'STAFF') {
          next()
          return
        }
        if (roles[i].name === 'ADMIN') {
          next()
          return
        }
      }
      res.status(403).send({
        message: 'Require Staff or Admin Role!'
      })
    })
  })
}

const authJwt = {
  verifyToken,
  isAdmin,
  isModerator,
  isModeratorOrAdmin
}

module.exports = authJwt
