# Descripción del proyecto
El back para la app de dentistap esta pensado para poder realizar las siguientes acciones:

- Establecer conexion con la base de datos para guardar informacion relevante para:
  - Guardar informacion sobre urgencias dentales, y otro tipo de datos en el futuro
  - interactuar con esa informacion
- Hacer de puente entre el front y el back mediante una Api-Rest
- No se van a implementar de momento ningun sistema de autenticacion de terceros
- Para manejar la base de datos utilizaremos como ORM el [sequelize](https://sequelize.org/)


En los siguientes archivos veremos diferentes puntos sobre la configuracion del back y diversos ejemplos de como usar la tecnologia implementada en el mismo.

1. [crear Proyecto](./initProject.md)
2. [express](./express.md)
3. [sequelize](./sequelize.md)
4. [autorizacion](./autorization.md)