# Configuirar acceso a la base de datos

esta parte es relativamente sencilla ya que lo que tenemos que realizar es un archivo con las configuraciones de la base de datos y una serie de caracteristicas generales que va a tener la base de datos.

Si hemos leido el la parte de [.sequelizerc](../initProject) dentro de la documentacion inicial, veremos que el archivo de configuracion que va a buscar sequelize tiene una ruta especifica en nuestro caso es 

> server/config/database.js

```javascript

// todos los parametros que puedan ser algo sensibles 
// los pasamos como variables de entorno para ocultar un poco la informacion
const options = {
    // los 4 primeros atributos son basicamente los que tendria una cadena de
    // conexion a una base de datos
  username: process.env.USERNAME_DATABASE, 
  password: process.env.PASSWORD_DATABASE,
  database: process.env.TABLE_DATABASE,
  host: process.env.HOST_DATABASE,
    // aqui le indicamos a sequelize la base o bases de datos que vamos a usar
    // en nuestro caso el valor sera de mysql
  dialect: process.env.DIALECT_DATABASE,

    // aqui indicamos el nombre de la tabla para las siembras, y el almacen
  seederStorage:'sequelize',
  seederStorageTableName:'SequelizeSeeds',


    // y por ultimo una serie de caracteristicas comunes a todas las tablas 
    // por ejemplo timestamp incluye un campo de fecha de creacion y otro de ultima
    // modificacion
    // underscored lo que hace es cambiar la forma en la que se nombrar las tablas
    // con o sin guion bajo
  define:{
    timestamps: false,
    underscored: true,
  }
  
}

module.exports = options;

```

Esto es lo referente a nuestro acceso a la base de datos.

Sequelize admite mucha mas parametrizacion , para mas info sobre esta parte [➡️](https://sequelize.org/v6/manual/getting-started.html#connecting-to-a-database)


## [Volver a Documentacion base](./initProject.md)