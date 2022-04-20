require('dotenv').config();
require('colors')

const express = require('express');
const cors = require('cors');

const server = express();

//!const {connection} = require('./database/db'); //probando  conexion desde archivo index

const { sequelize } = require('../app/models/index');


//middlewares
server.use(express.json())
server.use(express.urlencoded({extended:false}))
server.use(cors())

//rutas
const userRouter = require('./routes/user.routes')
server.use('/user', userRouter);

const causesRoutes = require('./routes/causes.routes');
server.use('/causes', causesRoutes);

const simptomsRoutes = require('./routes/simptoms.routes');
server.use('/simptoms', simptomsRoutes);

const patientsRoutes = require('./routes/patients.routes');
server.use('/patients', patientsRoutes);

const progDatesRoutes = require('./routes/progDates.routes');
server.use('/dates', progDatesRoutes);

const emergencyRoutes = require('./routes/emergency.routes');
server.use('/emergency', emergencyRoutes);

const medicalInfoRouter = require('./routes/medicalInfo.routes');
server.use('/medical', medicalInfoRouter);

const appointmentRouter = require('./routes/appointment.routes');
server.use('/appointment', appointmentRouter);


const authRouter = require('./routes/auth.routes');
server.use('/login', authRouter)



const PORT = process.env.PORT || 7074 ;



//levantamos el servidor
server.listen(PORT , ()=> {
  console.log(`\n${'Servidor levantado en puerto'.bold} ${PORT.toString().green.bold}\n`);
  // !connection.sync({
    sequelize.sync({
    force:true,
  })
  .then(()=>{
    console.log(`\nconectado con ${process.env.TABLE_DATABASE}`);
  })
})