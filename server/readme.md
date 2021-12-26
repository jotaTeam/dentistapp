# Seeders - alimentar base de datos

para realizar siembrass es necesario tener el servidor arriba

```
~npm run dev
```

## crear seeds y sembrarlos

1. Debemos crear nuestro seed  atraves de la consola atraves de CLI de sequelize
```
~npx sequelize-cli seed:generate --name <nombreDeLaSemilla>
```

2. configurar nuestro archivo seeder, se habra creado dentro de la carpeta de seeders

```javascript

'use strict';

module.exports = {
  //se ejecuta al hacer la siembra de la semilla(seed)
  up: async (queryInterface, Sequelize) => {

    const users=[{
      name: "Grier",
      password: "psxm10fup",
      "google_token": "aa4fc51d32bd95ab888c0b33e32d86e4e93b0728"
    }, {
      name: "Sallie",
      password: "vkyjK2Lrdkqk",
      "google_token": "aa4fc51d32bd95ab888c0b33e32d86e4e93b0728"
    }, // podemos pasarle un objeto o crearnos algun algoritmo que nos cree los datos de forma aleatoria
    }]

     await queryInterface.bulkInsert('users',users , {});
  
  },
 //esta se ejucata cuando hacemos el proceso inverso a la siembra
  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('People', null, {});
    
  }
}  


```

3. una vez configurado el archivo ejecutamos la siembra

```
~npx sequelize-cli db:seed:all
```

4. verificamos el estado de la base de datos

5. para borrar la siembra
```
//esto borrara todo
~npx sequelize-cli db:seed:undo

//esto borrara un seed especifico
~npx sequelize-cli db:seed:undo --seed <nombreSeed>
```

## especificar registro de los seeds

1. nos dirigimos al archivo de configuracion de la base de datos

```javascript
//../../config/database.js
require('dotenv').config();



const options = {
  //conexion
  username: process.env.USERNAME_DATABASE,
  password: process.env.PASSWORD_DATABASE,
  database: process.env.TABLE_DATABASE,
  host: process.env.HOST_DATABASE,
  dialect: process.env.DIALECT_DATABASE,

  //seeders
  //en formato json en nuestra raiz
  // seederStorage:'json',
  // seederStoragePath: 'sequelizeSeed.json',

  //dentro de nuestra base de datos  
  seederStorage:'sequelyze',
  seedersTableName:'SequelizeSeeds'//pone el nombre de la tabla que quieras

  //configuracion de la base de datos
  define:{
    timestamps: false,
    underscored: true,
    

  }
  
}

module.exports = options;

```


