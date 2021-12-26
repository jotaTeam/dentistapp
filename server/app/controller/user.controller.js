// const { User } = require("../database/db");
const { User } = require("../models/index");

const userController ={};

//define el controlador

//Create
userController.create = async( req, res )=>{
  const {name,password,email,google_token} =  req.body;
  User.create({
    name,
    password,
    email,
    google_token,
  })
  .then(user=> res.json(user))
  .catch(err=>res.json(err))
}

//Read
userController.getAll = async(req, res)=>{
  User.findAll()
  .then(user=>res.json(user))
  .catch(err=>res.json(err))
}

userController.getById = async(req, res)=>{
  const id = req.params.id
  User.findByPk(id)
  .then(user=>res.json(user))
  .catch(err=>res.json(err))
}

//update
userController.update = async (req, res) =>{
  const id = req.params.id
  const options = req.body;
  console.log(options);
  User.update(options,{
    where:{
      id,
    }
  })
  .then(user=>res.json(user))
  .catch(err=>res.json(err))

}

//delete
//TODO probar esto
userController.delete = async (req, res)=> {
  const id = req.params.id;
  User.destroy({where:{
    id
  }})
  .then(user=>res.json(user))
  .catch(err=>res.json(err));
}

module.exports = userController;