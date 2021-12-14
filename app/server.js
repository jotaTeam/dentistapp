require('dotenv').config({path:'../.env'});
require('colors')

const express = require('express');
const db = require('./database/db');
const server = express();
const sequelize = require('./database/db');




const PORT = process.env.PORT ;


server.listen(PORT , ()=> {
  console.log(`\n${'Servidor levantado en puerto'.bold} ${PORT.toString().green.bold}\n`);
  db.sync({force:true})
  .then(()=>{
    console.log(`\nconectado con ${process.env.TABLE_DATABASE.yellow}`);
  })
})