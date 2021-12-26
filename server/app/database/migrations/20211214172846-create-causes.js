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
        type: Sequelize.BOOLEAN,
        defaultValue:false,
      },
      fracture: {
        type: Sequelize.BOOLEAN,
        defaultValue:false,
      },
      gums_problems: {
        type: Sequelize.BOOLEAN,
        defaultValue:false,
      },
      oral_hygiene: {
        type: Sequelize.BOOLEAN,
        defaultValue:false,
      },
      oral_disease: {
        type: Sequelize.BOOLEAN,
        defaultValue:false,
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