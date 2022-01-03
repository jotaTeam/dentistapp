# Autorizacion 
========

1. vamos a describir brevemente lo que hemos hecho para realizar la encriptacion de un password en nuestra base de datos
2. validar que en el login del usuario el password es valido y enviarle un token al front
3. filtrar contenido de la api mediante una validacion del token con un middleware

## Encriptacion

Lo primero que tenemos que tener en cuenta es que cuando vayamos a guardar datos en nuestra base de datos.
Hay algunos datos que son de caracter sensible como lo podria ser las contraseñas de los usuarios.
Usualmente estos datos se encriptan antes de ser guardados en la base de datos

___ejemplo:___

```js
//Registro
auth.signUp = (req, res)=>{

//obtenemos los datos que son necesarios para creacion de un nuevo usuario
const {name, email, password} = req.body;

// 'hashseamos' el password para darle un formato que nosotros no podamos descifrar sin usar nuestro salt
const hashPass = bcrypt.hashSync(password, Number.parseInt(config.salt) )

// creamos el nuevo usuario
  User.create({
    name,
    email,
    password: hashPass // como vemos en el parametro de password le pasamos el password encriptado
  })
  .then(user=>{

    //una vez guardado el usuario, construimos el token que validara su sesion
    const token = jwt.sign({user:user},config.secret,{
      expiresIn: config.expireIn, //diferentes opciones pueden ser añadidas al token
  })

  //por ultimo devolvemos el mensaje de stado de la peticion al backend y el objeto creado(opcional) y su token
  res.status(201).json({
    user:user,
    token,
  })

  })
  .catch(err=> res.status(500).json(err))//manejo de excepciones

}
```

una vez que el usuario se haya creado en el sistema este podra verificar su identidad para obtener un token nuevo en caso de el viejo haya expirado

## login

Toca verificar que el usuario de la aplicacion es un ususario valido que tiene permitido acceder a las partes privadas de nuestra API.
Para ello lo que vamos a hacer es enviarle el usuario para realizar una busqueda en nuestra base de datos y el password para verificar que coincide con el password hashseado de nuestra BD

___ejemplo:___

```js
auth.signIn =  (req ,res)=>{

//extraemos el email y el password
const{email,password}=req.body

//realizamos la consulta a la base de datos
User.findOne({
  where:{
    email
  }
})
.then(user=>{

//una vez se resuelva la consulta comprobamos los posibles resultados

//no se encuentra el usuario
 if (!user){
   res.status(404).json({msg: 'usuario no encontrado'})

//se encuentra el ususario
//se comprueba si el password enviado hace match con el hash en la BD
 }else if (bcrypt.compareSync(password, user.password)){

// se crea el token en caso de que la contraseña sea valida
  const token = jwt.sign({user},config.secret,{
    expiresIn:config.expireIn
  })

// se envia la respuesta con el token
   res.status(200).json({msg:'vas por buen camino', token})

//en caso contrario -- password invalido
 }else{
   res.status(200).json({msg: 'password incorrecto'})

 }

})
.catch(err=>{//manejo de excepciones
  res.status(500).json({err})
})


}
```

como vemos en este ejemplo y en el anterior en ambos casos devolvemos un token, el token nos sirve para varias cosas, entre ellas validacion y obtener la informacion de vuelta del payload grabado durante la creacion del token

## Middlewares

Los middlewares son basicamente funciones que se ejecutan antes de realizar culquier accion dentro de nuestra API.
En este caso en concreto validar que el token que tiene el usuario es valido.
En base a esto el middleware permitira o no que la peticion continue o se detenga en el mismo middleware

___ejemplo:___

```js
//como vemos contamos con los parametros usuales request y resolve
//pero ademas contamos con next el cual una vez invocado pasaremos al siguiente middleware o metodo final de nuestra API
tokenVerify(req, res, next){

    const TOKEN_POSITION=1

    
    //Lo normal es que los token viajen por el header de la peticion POST
    //en concreto por el parametro 'authorization'
    if(!req.headers.authorization){
      res.status(401).json({msg:'no encontrado'})
    }else {
      
      //si tenemos dicho parametro toca obtener el token
      const token = req.headers.authorization.split(' ')[TOKEN_POSITION]

        //por ultimo tenemos que validar que el token recibido es valido
        jwt.verify(token,secret,(err,decoded)=>{
          
          //el callback anterior nos sirve para discernir que hacer en cada caso
          //invalido, devolvemos un mensaje de error y se acaba la peticion
          if(err){
            res.status(500).json({msg: 'ha ocurrido un error', err})

          //aqui por temas ilustrativos se muestra en consola el valor del objeto decode
          //si todo ha ido bien simplemente llamamos a la funcion next
          }else{
            console.log(decoded);
            // res.status(200).json({msg:'token valido'})
            next();
          }
        })

      }
    }
```

## consideraciones finales

Tenemos que asegurarnos que los datos sensibles que podamos guardar en nuestra base de datos que no queramos que sea de conocimiento publico, ofuscarlos de alguna manera, es buena practica encriptarlos.

Ademas el uso de tokens nos ayuda a filtrar el contenido que es accesible segun que usuario accede

si a todo esto le sumamos los middleware podemos hacer una applicacion que ademas verifique o modifique una serie de parametros antes de realizar la peticion final.



