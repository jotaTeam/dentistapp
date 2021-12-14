const userController ={};

//define el controlador
userController.get = (req, res)=>{
  res.send('hola mundo');
  res.json({hola:'mundo'});
}


module.exports = userController;