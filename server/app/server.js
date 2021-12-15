require('dotenv').config();
require('colors')

const express = require('express');
const {connection} = require('./database/db');
const server = express();


//middlewares
server.use(express.json())
server.use(express.urlencoded({extended:false}))

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

const PORT = process.env.PORT || 3000 ;



//levantamos el servidor
server.listen(PORT , ()=> {
  console.log(`\n${'Servidor levantado en puerto'.bold} ${PORT.toString().green.bold}\n`);
  connection.sync({
    force:false,
  })
  .then(()=>{
    console.log(`\nconectado con ${process.env.TABLE_DATABASE}`);
  })
})