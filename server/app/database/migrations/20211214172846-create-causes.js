'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('causes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cavity: {
        type: Sequelize.BOOLEAN
      },
      fracture: {
        type: Sequelize.BOOLEAN
      },
      gums_problems: {
        type: Sequelize.BOOLEAN
      },
      oral_hygiene: {
        type: Sequelize.BOOLEAN
      },
      oral_disease: {
        type: Sequelize.BOOLEAN
      },
      other: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('causes');
  }
};