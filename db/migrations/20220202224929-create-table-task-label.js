'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('TaskLabel', { 
      taskId: Sequelize.INTEGER,
      labelId: Sequelize.INTEGER,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('TaskLabel');
  }
};
