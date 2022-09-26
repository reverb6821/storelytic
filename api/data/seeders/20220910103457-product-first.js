'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [{
      name: 'Razer DeathAdder V2 Pro',
      description: 'Best-in-Class Wired Gaming Mouse Ergonomics, Optical Mouse Switch, Focus + 20K Optical Sensor with Speedflex Cable',
      quantity: 5,
      shipped: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {})
  }
}
