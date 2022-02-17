'use strict';

module.exports = {

  
  up: async (queryInterface, Sequelize) => {

    const users=[{
      name: "Grier",
      password: "psxm10fup",
      "google_token": "aa4fc51d32bd95ab888c0b33e32d86e4e93b0728"
    }, {
      name: "Sallie",
      password: "vkyjK2Lrdkqk",
      "google_token": "aa4fc51d32bd95ab888c0b33e32d86e4e93b0728"
    }, {
      name: "Annaliese",
      password: "YWRdZvwuY",
      "google_token": "aa4fc51d32bd95ab888c0b33e32d86e4e93b0728"
    }, {
      name: "Hersh",
      password: "OsB1EmkM",
      "google_token": "aa4fc51d32bd95ab888c0b33e32d86e4e93b0728"
    }, {
      name: "Meara",
      password: "Mk9GfAxHephz",
      "google_token": "aa4fc51d32bd95ab888c0b33e32d86e4e93b0728"
    }, {
      name: "Darnell",
      password: "urWJgk",
      "google_token": "aa4fc51d32bd95ab888c0b33e32d86e4e93b0728"
    }, {
      name: "Sibeal",
      password: "oZRjO7Zaow42",
      "google_token": "aa4fc51d32bd95ab888c0b33e32d86e4e93b0728"
    }, {
      name: "Sutton",
      password: "TxnlOt9v6l",
      "google_token": "aa4fc51d32bd95ab888c0b33e32d86e4e93b0728"
    }, {
      name: "Darda",
      password: "80ejqyZG",
      "google_token": "aa4fc51d32bd95ab888c0b33e32d86e4e93b0728"
    }, {
      name: "Deb",
      password: "qi0gHqdIB",
      "google_token": "aa4fc51d32bd95ab888c0b33e32d86e4e93b0728"
    }]

     await queryInterface.bulkInsert('users',users , {});
  
  },

 
  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('users', null, {});
    
  }
}  
