const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const config = require('../../config/auth');

const { User } = require('../models/index');

const auth = {};



auth.signIn =  (req ,res)=>{

const{email,password}=req.body

User.findOne({
  where:{
    email
  }
})
.then(user=>{

 if (!user){
   res.status(404).json({msg: 'usuario no encontrado'})

 }else if (bcrypt.compareSync(password, user.password)){

  const token = jwt.sign({user},config.secret,{
    expiresIn:config.expireIn
  })


   res.status(200).json({msg:'vas por buen camino', token})

 }else{
   res.status(200).json({msg: 'password incorrecto'})

 }

})
.catch(err=>{
  res.status(500).json({err})
})


}



//Registro
auth.signUp = (req, res)=>{
const {name, email, password} = req.body;


const hashPass = bcrypt.hashSync(password, Number.parseInt(config.salt) )
  User.create({
    name,
    email,
    password: hashPass
  })
  .then(user=>{

    const token = jwt.sign({user:user},config.secret,{
      expiresIn: config.expireIn,
  })

  res.status(201).json({
    user:user,
    token,
  })

  })
  .catch(err=> res.status(500).json(err))

}



module.exports = auth


