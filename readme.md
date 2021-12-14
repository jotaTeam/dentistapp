# Este Skeleton sirve para iniciar de manera rapida una API-REST con sequelize

## Hay que tener en cuenta una serie de consideraciones antes de usarlo
1. crea una carpeta para alojar el repositorio
2. ejecuta el siguiente comando en consola dentro de la ruta de tu carpeta
```bash
~npm install
 ```
 3. ahora debemos renombrar nuestro .envExample a .env
, dentro del cual especificaremos nuestras variables de entorno
 ```env
 #DATABASE
URI_DATABASE=PRUEBA
USERNAME_DATABASE=root 
PASSWORD_DATABASE=''
TABLE_DATABASE=dentistapp
HOST_DATABASE=localhost
DIALECT_DATABASE=mysql
PORT_DATABASE=3306

#PORT SERVER
PORT=3000
 ```
 4. para que la aplicacion funcione necesitamos tener creada la base de datos para que sequelize sea capaz de crear las tablas
 5. para crear modelos en el proyecto usa el siguiente comando, la etiqueta name indica el nombre del modelo para crear la tabla y attributes las columnas seguido de ':' para indicar el tipo de dato para mas informacion [documentacion-sequelize](https://sequelize.org/master/manual/migrations.html#creating-the-first-model--and-migration-)
 ```bash
 npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
 ```
 6. Tienes una carpeta de routes y otra de controlladores con un mini ejemplo funcional
 7. por ultimo para probar la app utiliza el comando
 ```bash
 ~npm run dev
 ```
 8. dentro de el archivo server.js cuando conectamos con la base de datos por defecto nos creara cada vez que entremos las tablas, eliminando y recreando la bd 
 ```javascript
 //levantamos el servidor
server.listen(PORT , ()=> {
  console.log(`\n${'Servidor levantado en puerto'.bold} ${PORT.toString().green.bold}\n`);
  //db.sync({force:true}) --> forzamos a que se cree desde cero la BD
  db.sync({force:false}) --> conecta con la base de datos y hace modificaciones si es necesario
  .then(()=>{
    console.log(`\nconectado con ${process.env.TABLE_DATABASE.yellow}`);
  })
})

 ```
 9. este repo es solo para iniciar un proyecto de forma rapida, si encuentras que se puede mejor deja tu PR



