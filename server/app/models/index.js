'use strict';

//fs y path para navegar por los archivos
const fs = require('fs');
const path = require('path');

//nuestro objeto sequelzy para realizar la conexion y configuraciones
const Sequelize = require('sequelize');
const basename = path.basename(__filename);

//variable para indicar entorno
// const env = process.env.NODE_ENV || 'development';

//configuracion de nuestra base de datos
// const config = require(__dirname + '/../config/config.json')[env];

const options = require('../../config/database');

//declaramos el objeto db
const db = {};


//iniciar nuestra conexion
const sequelize = new Sequelize(options)


//leemos el directorio del proyecto para buscar los modelos y vincularlos
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    
    // descomentar para ver nombres de los modelos
    // console.log(model);

    //vinculamos nuestros modelos a la base de datos
    db[model.name] = model;
  });

// realizamos las asociaciones entre las bases de datos
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
