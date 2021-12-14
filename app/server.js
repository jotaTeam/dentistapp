require('dotenv').config({path:'../.env'});
require('colors')

const express = require('express');
const db = require('./database/db');
const server = express();


//middlewares
server.use(express.json())
server.use(express.urlencoded({extended:false}))

//rutas
const userRouter = require('./routes/user.routes')
server.use('/example', userRouter);

const PORT = process.env.PORT || 3000 ;


//levantamos el servidor
server.listen(PORT , ()=> {
  console.log(`\n${'Servidor levantado en puerto'.bold} ${PORT.toString().green.bold}\n`);
  db.sync({force:true})
  .then(()=>{
    console.log(`\nconectado con ${process.env.TABLE_DATABASE.yellow}`);
  })
})