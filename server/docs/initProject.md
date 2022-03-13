# Crear el esqueleto de la app

lo primero que haremos sera realizar el siguiente comando en la ruta en la que vayamos a trabajar

```Shell
npm init <nombreApp>
```

una vez que tengamos esto necesitamos instalar los paquetes necesarios poder trabajar con comodidad en node, en nuestro caso hemos instalados los siguientes paquetes:
- dependencias de produccion
  - express
  - sequelize
  - bcryptjs
  - cors
  - dotenv
  - jsonwebtoken
  - mysql2
- dependencias de desarrollo
  - nodemon
  - sequelize-CLI

para instalar dependencias se utiliza el siguiente comando en la terminal

```Shell

# produccion

npm i <nombre del paquete>

# desarrollo

npm i -D <nombre del paquete>

```

durante el desarrollo de la app se instalaron paquetes adicionales pero son completamente optativos.


Para generar una estructura en que la que podamos trabajar vamos a hacer uso de CLI de sequelize. Para ello volvemos a la terminal y escribimos los siguiente

```Shell

npx sequelize-cli init

```

este comando nos genera una serie de carpetas para trabajar con sequelize:

- [config](./DB-conf.md) -- conexion con la base de datos
- [models](./CreateModels.md) -- todos los modelos y ademas el archivo index para dominarlos a todos
- [seeders](./sembrar.md) -- archivos para sembrar la base de datos que veremos mas adelante
- [migrations](https://sequelize.org/v6/manual/migrations.html) -- las migraciones son los archivos que se ejecutan con la informacion de los modelos para generar nuestra base de datos

en nuestro caso la estructura que nos generaba el CLI no concordaba con la idea que teniamos para organizar las carpetas y recolocamos donde nos venia mejor.
Para ello tuvimos que usar un archivo de configuracion que le indicara la ruta de los diferentes archivos necesarios para el ORM, es decir model,seeder,migrations y config. 

El archivo es [.sequelizerc](https://sequelize.org/v6/manual/migrations.html#the--code--sequelizerc--code--file) [:anchor:](#sequelizerc)

```javascript
var path = require('path')

module.exports = {
  'config':          path.resolve('config', 'database.js'),
  'models-path':     path.resolve('app','models'),
  'migrations-path': path.resolve('app','database', 'migrations'),
  'seeders-path':      path.resolve('app','database','seeders'),
}
```

aqui podemos ver que es un archivo de javascript, y le indicamos donde estan los diferentes archivos, esto lo hacemos gracias a la api de *path* que resuelve la direccion donde se encuentran los archivos o carpetas

## configuracion Express

en el archivo *server.js* vamos a realizar la configuracion de express que basicamente es levantar el servidor e indicarle que servicios y/o middlewares vamos a usar.

1. creamos una instancia de express
2. luego indicamos que middleware, por ejemplo queremos poder enviar y recibir datos en fomato JSON

```javascript
server.use(express.json())
```
3. indicamos las rutas de cada uno de los endpoints que tiene

```javascript
const userRouter = require('./routes/user.routes')
server.use('/user', userRouter);
```

4. indicamos que puerto usar, normalmente usaremos el puerto proporcionado por el sistema

```javascript
const PORT = process.env.PORT || 7074 ;
```

5. levantamos el servidor, esto lo hacemos con el metodo listen de nuestra instancia de express, el metodo necesita un puerto y un calback donde le indicaremos que es lo que debe hacer el servidor una vez levantado
  - en nuestro caso el callback establece conexion con la base de datos atraves de sequelize, este objeto lo importamos desde el archivo index que se encuentra en model

  ```javascript
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
  ```

## Sequelize

A la hora de trabajar con sequelize tenemos que tener en cuenta:
- [conexion a la base de datos y configuracion de instancia de sequelize](./DB-conf.md)
- [crear modelos](./CreateModels.md)
- [configuraciones a la hora de lanzar sequelize](./sequelize.md)