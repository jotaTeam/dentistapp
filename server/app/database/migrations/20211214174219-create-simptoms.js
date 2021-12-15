'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('simptoms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bleeding: {
        type: Sequelize.BOOLEAN
      },
      pain: {
        type: Sequelize.BOOLEAN
      },
      dental_movility: {
        type: Sequelize.BOOLEAN
      },
      ulcer: {
        type: Sequelize.BOOLEAN
      },
      dental_stains: {
        type: Sequelize.BOOLEAN
      },
      gums_inflammations: {
        type: Sequelize.BOOLEAN
      },
      bad_breath: {
        type: Sequelize.BOOLEAN
      },
      sensibility: {
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
    await queryInterface.dropTable('simptoms');
  }
};