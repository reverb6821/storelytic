'use strict';

const { now } = require('sequelize/types/utils');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('users', [
      {
       username: 'John Doe',
       password: '$2a$12$nY04ZqfSFz7ZgDkjYjlVCu95r2uGWpgvHrPnytB424fpVwFw3gsmi', //admin
       createdAt: new Date(),
       updatedAt: new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
  }
};
