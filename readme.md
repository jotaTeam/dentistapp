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
 4. para crear modelos en el proyecto usa el siguiente comando, la etiqueta name indica el nombre del modelo para crear la tabla y attributes las columnas seguido de ':' para indicar el tipo de dato para mas informacion [documentacion-sequelize](https://sequelize.org/master/manual/migrations.html#creating-the-first-model--and-migration-)
 ```bash
 npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
 ```
 5. Tienes una carpeta de routes y otra de controlladores con un mini ejemplo funcional
 6. por ultimo para probar la app utiliza el comando 
 ```bash
 ~npm run dev
 ```
 7. este repo es solo para iniciar un proyecto de forma rapida, si encuentras que se puede mejor deja tu PR

 

