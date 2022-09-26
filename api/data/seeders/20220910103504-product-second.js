'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [{
      name: 'Razer BlackWidow V3 TKL',
      description: 'Green Switch Gaming Keyboard with RGB Chroma Lighting, Multi-Function Digital Wheel and Multimedia Keys, Ergonomic Wrist Rest, US Layout, Black',
      quantity: 2,
      shipped: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
