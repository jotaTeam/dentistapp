'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const causes=[{
      medical_info_id	:1
    },
    {
      medical_info_id	:2
    },{
      medical_info_id	:3
    },{
      medical_info_id	:4
    },{
      medical_info_id	:5
    },{
      medical_info_id	:6
    },{
      medical_info_id	:7
    },{
      medical_info_id	:8
    },{
      medical_info_id	:9
    },{
      medical_info_id	:10
    },];


      await queryInterface.bulkInsert('causes', causes, {});
   
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('causes', null, {});
   
  }
};
