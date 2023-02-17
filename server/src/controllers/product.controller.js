const db = require("../models");
const Product = db.product
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: 'Content can not be empty!'
    })
    return
  }

  const product = {
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
    note: req.body.note,
    img: req.body.img,
    stock: req.body.stock ? req.body.stock : false
  }
  Product.create(product)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Product.'
      })
    })
}

exports.findAll = (req, res) => {
  const name = req.query.name
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null
  Product.findAll({ where: condition })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
            err.message || 'Some error occurred while retrieving product.'
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id
  Product.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Product with id=${id}.`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving Product with id=${id} | ${err}`
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Product.update(req.body, {
    where: { id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Product was updated successfully.'
        })
      } else {
        res.send({
          message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Product with id=${id} | ${err}`
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  Product.destroy({
    where: { id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Product was deleted successfully!'
        })
      } else {
        res.send({
          message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Product with id=${id} | ${err}`
      })
    })
}

exports.deleteAll = (req, res) => {
  Product.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Products were deleted successfully!` })
    })
    .catch(err => {
      res.status(500).send({
        message:
              err.message || 'Some error occurred while removing all Products.'
      })
    })
}
exports.findAllStocked = (req, res) => {
  Product.findAll({ where: { stock: true } })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving products.'
      })
    })
}