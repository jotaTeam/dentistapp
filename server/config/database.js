require('dotenv').config();



const options = {
  username: process.env.USERNAME_DATABASE,
  password: process.env.PASSWORD_DATABASE,
  database: process.env.TABLE_DATABASE,
  host: process.env.HOST_DATABASE,
  dialect: process.env.DIALECT_DATABASE,

  seederStorage:'sequelize',
  seederStorageTableName:'SequelizeSeeds',

  define:{
    timestamps: false,
    underscored: true,
  }
  
}

module.exports = options;
//hola que tal lauraaaa ooo
