module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define('product', {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    // img: {
    //   type: Sequelize.BLOB('long')
    // },
    shipped: {
      type: Sequelize.BOOLEAN
    }
  })
  return Product
}
