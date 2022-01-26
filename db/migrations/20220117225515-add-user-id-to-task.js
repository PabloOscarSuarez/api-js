'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Tasks', 'userId', {
      type: Sequelize.DataTypes.INTEGER,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropColumn('Tasks', 'userId')
  }
};
