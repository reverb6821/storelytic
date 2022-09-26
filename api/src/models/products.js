module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define('products', {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    img: {
      type: Sequelize.BLOB
    },
    quantity: {
      type: Sequelize.INTEGER
    },
    stock: {
      type: Sequelize.BOOLEAN
    }
  })
  return Product
}
