'use strict';
const faker = require('faker');

const { dental_emergency } = require('../../models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let medicalInfos=[{
        allergy:false,
        pathology:false,
        dental_emergency_id: 1,
    },
    {
      allergy:false,
      pathology:false,
      dental_emergency_id: 2,
  },{
    allergy:false,
    pathology:false,
    dental_emergency_id: 3,
},{
  allergy:false,
  pathology:false,
  dental_emergency_id: 4,
},{
  allergy:false,
  pathology:false,
  dental_emergency_id: 5,
},{
  allergy:false,
  pathology:false,
  dental_emergency_id: 6,
},{
  allergy:false,
  pathology:false,
  dental_emergency_id: 7,
},{
  allergy:false,
  pathology:false,
  dental_emergency_id: 8,
},{
  allergy:false,
  pathology:false,
  dental_emergency_id: 9,
},{
  allergy:false,
  pathology:false,
  dental_emergency_id: 10,
},];
    
  
    
// } 

     await queryInterface.bulkInsert('medical_infos', medicalInfos, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    
    
    
     await queryInterface.bulkDelete('medical_infos', null, {});
    
  }
};
