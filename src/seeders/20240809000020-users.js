'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [{
      name: 'Vitor Vian',
      email: 'vitor.vian@dividendus.com',
      username: 'vitor.vian',
      password: bcrypt.hashSync('teste123', bcrypt.genSaltSync(10)),
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
