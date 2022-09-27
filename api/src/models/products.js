module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define('products', {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    quantity: {
      type: Sequelize.INTEGER
    },
    note: {
      type: Sequelize.STRING
    },
    stock: {
      type: Sequelize.BOOLEAN
    }
  })
  return Product
}
