## Configurar nuestra instancia de sequelize

para trabajar con el ORM necesitamos que indicarle a sequelize la [base de datos](./DB-conf.md) y los [modelos](./CreateModels.md). Ya veremos que las migraciones son generadad automaticamente con cada modelo creado.

pero para que la instancia se genere bien necesitamos indicarle a sequilize cuales son los modelos con los que tiene que construir la base de datos. 

Estp nos da bastante flexibilidad si por ejemplo queremos trabajar con mas de una base de datos.

### archivo index.js

dentro de la carpeta models si hemos hecho el comando

```Shell

npx sequelize-cli init

```

tendremos un archivo que se encarga de a hacer una serie dea importaciones y configuraciones de manera automatica ala hora de generar nuestra instancia de sequelize

por ejemplo nos crea las referencias de los modelos existentes en la carpeta models

```javascript

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

```

Una vez obtenemos las referencias de los modelos existentes en nuestro proyecto creamos las asosiaciones que puedan tener cada una

```javascript
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
```

por ultimo importamos nuestro objeto con todas las modificaciones que hemos realizado en este archivo.

### Que hacer para usar la instancia de sequelize

para eso tenemos que volver a nuestro archivo server.js

justo al final del scrip vemos que levantamos el servidor y esta accion lleva asociadda una funcion callback, que es la que va a lanzar el metodo de sequelize que comenzara a crear las tablas o simplemnte comprobara si esta creadas y nos devolvera un mensaje de que esta conectado, este mensaje solo lo podremos ver en la maquina donde se encuentre alojado nuestro backend

```javascript

server.listen(PORT , ()=> {
  console.log(`\n${'Servidor levantado en puerto'.bold} ${PORT.toString().green.bold}\n`);

  // el objeto sequelize lo hemos exportado previamente
  // a traves del metodo sync lo que logramos es 
  // por un lado conectar a nuestra base de datos 
  // por otro con una serie de parametros indicar que hacer cuando
  // nos conectamos
    sequelize.sync({
    force:true, // este valor le dice al metodo que cuando se conecte cree de cero la base de datos, si la ponemos en false solo creara las tablas y campos que hubieramos incluido

    // TIP , es normal tenerlo en true durante el desarrollo para realizar una serie de pruebas. Pero hay que recordar colocarlo en false cuando estemos en produccion para evitar una destruccion de los datos de la base de datos
  })

  // como vemos sequelize trabaja con promesas y es lo que vamos a usar para indicar que
  // cuando se resuelva con exito la promesa,
  // en consola tengamos el mensaje de que la conexion se ha realizado con exito
  .then(()=>{
    console.log(`\nconectado con ${process.env.TABLE_DATABASE}`);
  })
})


```

con estas configuraciones ya  deberiamos estar listos para empezar a lanzar nuestras peticiones al back desde cualquier lado ahora lo que necesitamos es indicar mediante nuestros controladores que es lo que hay que hacer en cada endpoint


## [Volver a Documentacion base](./initProject.md)