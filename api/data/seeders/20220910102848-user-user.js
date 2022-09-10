'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username: 'user',
      email: 'user@storelytic.org',
      password: '$2a$12$G3NhDtHCRXwMXRZKmbK7s.TMl5tPgZorTSVVH7kSGl5AyW6GbG1oC', // user
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
