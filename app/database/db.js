const { Sequelize } = require('sequelize');
const options = require('../../config/database');

const db = new Sequelize(options)

//modelos
//!ejemplo
//* db.User =require('../models/User')(db.connection,DataTypes);

//relaciones
//!ejemplo
//* db.User.associate(db);

module.exports=db;