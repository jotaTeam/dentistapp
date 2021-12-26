'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('medical_infos', {
      allergy:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
      },
      descriptionAllergy:{
        type:DataTypes.STRING,
        defaultValue: 'sin alergias previas'
      },
      pathology:{ //todo pathology
        type:DataTypes.BOOLEAN,
        defaultValue:false,
      },
      descriptionPathology:{
        type:DataTypes.STRING,
        defaultValue: 'sin alergias previas'
      },
      pain_zone:{
        type: DataTypes.STRING,
        defaultValue:'Sin dolor aparente'
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
    await queryInterface.dropTable('medical_infos');
  }
};