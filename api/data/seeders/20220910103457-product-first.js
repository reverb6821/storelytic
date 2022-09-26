'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [{
      name: 'Razer DeathAdder V2 Pro',
      description: 'Mouse da Gaming con Cablato Dalla Migliore Ergonomia Della Categoria, Optical Mouse Switch, Sensore Ottico Focus+ 20K con Cavo Speedflex',
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
