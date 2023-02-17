'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('labels', [{
       name: 'Main',
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('labels', null, {});
  }
};
