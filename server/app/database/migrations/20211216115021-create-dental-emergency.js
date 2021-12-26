'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dental_emergencies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
          isAlpha:true,
          len:[2-20],
        }
      },
      surnames: {
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
          isAlpha:true,
          len:[2-50],
        }
      },
      phone: {
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
          isNumeric:true,
          len:9,
  
        }
      },
      creation_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('dental_emergencies');
  }
};