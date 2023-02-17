const db = require("../models");
const User = db.user
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  const username = req.query.username
  const condition = username ? { username: { [Op.like]: `%${username}%` } } : null
  User.findAll({ where: condition })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
            err.message || 'Some error occurred while retrieving User.'
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id
  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving User with id=${id} | ${err}`
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  User.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'User was updated successfully.'
        })
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating User with id=${id} | ${err}`
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  User.destroy({
    where: { id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'User was deleted successfully!'
        })
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete User with id=${id} | ${err}`
      })
    })
}
