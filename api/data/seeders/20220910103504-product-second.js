'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [{
      name: 'Razer BlackWidow V3 TKL',
      description: 'Green Switch Tastiera da Gaming con Illuminazione Chroma RGB, Rotella Digitale Multi-Funzione e Tasti Multimediali, Poggia Polsi Ergonomico, Layout Italiano, Nero',
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
