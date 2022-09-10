'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username: 'staff',
      email: 'staff@storelytic.org',
      password: '$2a$12$nBL6NHA83CCLp9ViUdsTAuEpUxdRHuZuu4i/K0DsDw/zYiVY6xfBu', // staff
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
