## Peticiones

para resumir mucho la funcionalidad del backend, es un lugar al que le llegan una seria de peticiones, metodos HTTP, y este actua acorde a esas peticiones.

Ya sea guardando datos, actualizando, borrando o devolviedo datos.

Es decir tenemos un CRUD al cual accedemos de forma remota, una [API-REST](https://es.wikipedia.org/wiki/Transferencia_de_Estado_Representacional)

nuestro back validara si las peticiones se pueden hacer o no mediante unos [token de verificacion](./autorization.md) en caso de ser necesario.

### Controladores

para poder llevar a cabo estas acciones nesecitamos configurar que hara cada endpoint. Veamos un ejemplo:

```javascript
// como vemos la peticion es asincrona 
userController.create = async( req, res )=>{
    // el parametro req, viene de request
    // por el request se envia informacion de distinto tipo,
    // en este caso observamos que obtenemos la informacion que viene en el body
    // hay qeu decir que desde la peticion ya se acuerda el formato de envio

  const {name,password,email,google_token} =  req.body;

  // aqui hacemos uso de nuestro modelo, importado previamente
  // Como vemos la clase User tiene un metodo que crea el usuario en la base de
  // datos.
  // Ademas es una promesa, esto nos viene genial para devolver infoprmacion en caso
  // de  fallo
  User.create({
    name,
    password,
    email,
    google_token,
  })
  .then(user=> res.status(200).json({
    ok:true,
    user
  }))
  .catch(err=>res.status(500).json({
    ok:false,
    err
  }))
```

### Rutas
Una vez que tenemos el metodo necesitamos poder lanzarlo de alguna manera.

Para ello hacemos 2 cosas:

1. indicarle a express, en nuestro archivo server que rutas 'usar'

```javascript
// le indicamos que en la ruta /user utilize userRouter
server.use('/user', userRouter);
```
por ejemplo podriamos atacar todos los metodos definidos en el controlador de userController a traves de la ruta ***WWW.dondeestetuhost.com/user***  

2. definir unas rutas de para usar los controladores

Para generar rutas express tiene un metodo que nos devuelve un objeto mas acorde para la generacion de rutas

```javascript

const express = require('express');
const userController = require('../controller/user.controller');

// como vemos router es una instancia de la Clase Router
const router = express.Router();

// escribimos el nombre del objeto seguido de un punto 
// y el metodo HTTP que queramos usar para esa ruta
// luego cada metodo no pedira al menos 2 parametros
// la ruta a la que apuntar y el callback a realizar
// que podemos ver que esta dentro de nuestro controlador
router.get('/', userController.getAll)

router.get('/:id', userController.getById)

router.post('/', userController.create)

// resto del codigo

// y por ultimo exportamos
module.exports = router;
```