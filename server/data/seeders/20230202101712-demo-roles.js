'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('roles', [
      {
       name: 'ADMIN',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        name: 'MOD',
        createdAt: new Date(),
        updatedAt: new Date()
               
      },
      {
        name: 'USER',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('roles', null, {});

  }
};
