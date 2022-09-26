'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Razer DeathAdder V2 Pro',
        description: 'Best-in-Class Wired Gaming Mouse Ergonomics, Optical Mouse Switch, Focus + 20K Optical Sensor with Speedflex Cable',
        quantity: 5,
        stock: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Razer BlackWidow V3 TKL',
        description: 'Green Switch Gaming Keyboard with RGB Chroma Lighting, Multi-Function Digital Wheel and Multimedia Keys, Ergonomic Wrist Rest, US Layout, Black',
        quantity: 2,
        stock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Razer Nari Essential',
        description: 'Wireless Headset with THX support',
        quantity: 6,
        stock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {})
  }
}
