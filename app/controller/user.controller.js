const userController ={};

//define el controlador
userController.get = (req, res)=>{
  res.json({hola:'mundo'});
}


module.exports = userController;