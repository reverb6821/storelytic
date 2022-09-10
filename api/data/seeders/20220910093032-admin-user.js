'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username: 'admin',
      email: 'admin@storelytic.org',
      password: '$2a$12$nY04ZqfSFz7ZgDkjYjlVCu95r2uGWpgvHrPnytB424fpVwFw3gsmi', // admin
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
