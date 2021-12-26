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
        type: Sequelize.BOOLEAN,
        defaultValue:false,
      },
      pain: {
        type: Sequelize.BOOLEAN,
        defaultValue:false,
      },
      dental_movility: {
        type: Sequelize.BOOLEAN,
        defaultValue:false,
      },
      ulcer: {
        type: Sequelize.BOOLEAN,
        defaultValue:false,
      },
      dental_stains: {
        type: Sequelize.BOOLEAN,
        defaultValue:false,
      },
      gums_inflammations: {
        type: Sequelize.BOOLEAN,
        defaultValue:false,
      },
      bad_breath: {
        type: Sequelize.BOOLEAN,
        defaultValue:false,
      },
      sensibility: {
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
    await queryInterface.dropTable('simptoms');
  }
};