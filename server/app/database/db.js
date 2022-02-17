const { Sequelize, DataTypes } = require('sequelize');

const options = require('../../config/database');


const db = {}


db.connection = new Sequelize(options)


//modelos
//!ejemplo
//* db.User =require('../models/User')(db.connection,DataTypes);
db.User = require('../models/user')(db.connection, DataTypes)
db.ProgDates = require('../models/prog_dates')(db.connection, DataTypes)
db.Causes =require('../models/causes')(db.connection, DataTypes);
db.DentalClinic = require('../models/dental_clinic')(db.connection, DataTypes);
db.MedicalInfo = require('../models/medicalInfo')(db.connection, DataTypes);
db.Patients = require('../models/patient')(db.connection, DataTypes);
db.Simptoms= require('../models/simptoms')(db.connection, DataTypes);
db.Emergency = require('../models/dental_emergency')(db.connection, DataTypes);

//relaciones
//!ejemplo
//* db.User.associate(db);

db.MedicalInfo.associate(db);
db.Emergency.associate(db);
db.Causes.associate(db);
db.Simptoms.associate(db);


module.exports=db;