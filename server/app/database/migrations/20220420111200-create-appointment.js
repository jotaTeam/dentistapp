'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      dni: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      dental_cleaning: {
        type: Sequelize.BOOLEAN
      },
      curettage: {
        type: Sequelize.BOOLEAN
      },
      Teeth_Whitening: {
        type: Sequelize.BOOLEAN
      },
      medical_check: {
        type: Sequelize.BOOLEAN
      },
      orthodontics_check: {
        type: Sequelize.BOOLEAN
      },
      fluoridation: {
        type: Sequelize.BOOLEAN
      },
      pit_and_fissure_sealing: {
        type: Sequelize.BOOLEAN
      },
      obturation: {
        type: Sequelize.BOOLEAN
      },
      endodontics: {
        type: Sequelize.BOOLEAN
      },
      simple_extraction: {
        type: Sequelize.BOOLEAN
      },
      implants: {
        type: Sequelize.BOOLEAN
      },
      check_implants: {
        type: Sequelize.BOOLEAN
      },
      prosthesis: {
        type: Sequelize.BOOLEAN
      },
      check_prosthesis: {
        type: Sequelize.BOOLEAN
      },
      botox: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('appointments');
  }
};