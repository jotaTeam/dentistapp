# Creacion de modelos atraves del Sequelize-CLI
Vamos a ver como creamos un modelos para nuestro proyecto a traves de el CLI de sequelize

## Abrimos una terminal donde se ubica el proyecto

necesitamos tener intalado el CLI para ello vamos ejecutar el siguiente comando
```bash
    ~npm install --save-dev sequelize-cli
```
esto instalara en nuestras dependencias de desarrollo el CLI

## Creacion de nuestro modelo 

todos los comandos de sequelize tienen el siguiente formato 

### npx sequelize-cli <<command:action>> --flags

veamos un ejemplo 
```bash
npx sequelize-cli model:generate --name Teeth --attributes pieces:string
```
si separamos por comas y manteniendo el mismo formato podemos añadir mas atributos

veremos que una vez que lanzemos el comando tendremos una salida por pantalla indicandonos lo siguiente
1. que se ha creado un nuevo modelo
2. que se ha creado una nueva migracion

## Verificar el modelo

los modelos son creados acorde al archivo de configuracion .sequelizerc, en este proyecto se crean en la carpeta models

```javascript
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teeth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Teeth.init({
    pieces: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Teeth',
  });
  return Teeth;
};
```

Como podemos ver nos crea un esqueleto de nuestro modelo con los atributos previamente descrtitos.

tenemos que tener en cuenta que este las modificaciones que realizamos en este archivo tambien deberan ser hechas en su migracion

Los modelos podemos crearlos de forma manual, pero es aconsejable trabajar con los CLI de las diferentes librerias que usemos.


## [Volver a Documentacion base](./initProject.md)