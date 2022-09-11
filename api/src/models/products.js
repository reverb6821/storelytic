module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define('products', {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    shipped: {
      type: Sequelize.BOOLEAN
    }
  })
  return Product
}