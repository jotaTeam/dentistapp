require('dotenv').config();



const options = {
  username: process.env.USERNAME_DATABASE,
  password: process.env.PASSWORD_DATABASE,
  database: process.env.TABLE_DATABASE,
  host: process.env.HOST_DATABASE,
  dialect: process.env.DIALECT_DATABASE,
  define:{
    timestamp: true,
    underscore: true,
  }
  
}

module.exports = options;

