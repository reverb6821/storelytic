'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        email: 'admin@storelytic.org',
        password: '$2a$12$nY04ZqfSFz7ZgDkjYjlVCu95r2uGWpgvHrPnytB424fpVwFw3gsmi', // admin
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'moderator',
        email: 'moderator@storelytic.org',
        password: '$2a$12$nBL6NHA83CCLp9ViUdsTAuEpUxdRHuZuu4i/K0DsDw/zYiVY6xfBu', // moderator
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user',
        email: 'user@storelytic.org',
        password: '$2a$12$G3NhDtHCRXwMXRZKmbK7s.TMl5tPgZorTSVVH7kSGl5AyW6GbG1oC', // user
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
