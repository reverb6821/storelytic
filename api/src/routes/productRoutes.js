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
  app.post('/api/v1/product/', [authJwt.verifyToken, authJwt.isModerator], productController.create)
  // Retrieve all products
  app.get('/api/v1/product/', [authJwt.verifyToken], productController.findAll)
  // Retrieve all published products
  app.get('/api/v1/product/stocked', [authJwt.verifyToken, authJwt.isModerator], productController.findAllStocked)
  // Retrieve a single product with id
  app.get('/api/v1/product/:id', [authJwt.verifyToken], productController.findOne)
  // Update a product with id
  app.put('/api/v1/product/:id', [authJwt.verifyToken, authJwt.isModerator], productController.update)
  // Delete a product with id
  app.delete('/api/v1/product/:id', [authJwt.verifyToken, authJwt.isAdmin], productController.delete)
  // Delete all products
  app.delete('/api/v1/product/', [authJwt.verifyToken, authJwt.isAdmin], productController.deleteAll)
}
