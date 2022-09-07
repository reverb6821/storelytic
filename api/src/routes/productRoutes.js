const { authJwt } = require('../middleware')
const productController = require('../controller/productController')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })
  // Create new product
  app.post('/api/product/', [authJwt.verifyToken, authJwt.isModerator], productController.create)
  // Retrieve all products
  app.get('/api/product/', [authJwt.verifyToken], productController.findAll)
  // Retrieve all published products
  app.get('/api/product/shipped', [authJwt.verifyToken, authJwt.isModerator], productController.findAllShipped)
  // Retrieve a single product with id
  app.get('/api/product/:id', [authJwt.verifyToken], productController.findOne)
  // Update a product with id
  app.put('/api/product/:id', [authJwt.verifyToken, authJwt.isModerator], productController.update)
  // Delete a product with id
  app.delete('/api/product/:id', [authJwt.verifyToken, authJwt.isAdmin], productController.delete)
  // Delete all products
  app.delete('/api/product/', [authJwt.verifyToken, authJwt.isAdmin], productController.deleteAll)
}
