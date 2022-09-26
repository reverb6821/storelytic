'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('UserRoles', [{
      roles_id: 1,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      roles_id: 2,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      roles_id: 3,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      roles_id: 2,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      roles_id: 3,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      roles_id: 3,
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('UsersRoles', null, {})
  }
}
