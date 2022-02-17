'use strict';
const faker = require('faker')


module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      // Add seed commands here.
     
     let emergencies=[];

      for (let i = 0; i < 10; i++) {
         const emergency = {
           name: faker.name.firstName(),
           surnames: faker.name.lastName(),
           phone:faker.phone.phoneNumber('123456789')
         };

         emergencies[i]= emergency
        
      }
      
      await queryInterface.bulkInsert('dental_emergencies', emergencies , {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      // Add commands to revert seed here.
     
      
      await queryInterface.bulkDelete('dental_emergencies', null, {});
     
  }
};
