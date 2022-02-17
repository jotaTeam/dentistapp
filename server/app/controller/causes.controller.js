// const { Causes } = require('../database/db');
const { causes } = require('../models/index');

const CausesController ={};

CausesController.create = async(req, res)=>{
  Causes.create(req.body)
  .then(causes=>res.json(causes))
}

CausesController.get= async(req,res)=>{
  causes.findAll()
  .then(causes=>res.json(causes))
  .catch(err=>res.json(err))
}

CausesController.getById= async(req,res)=>{
  causes.findByPk(req.params.id)
  .then(causes=>res.json(causes))
  .catch(err=>res.json(err))
}

CausesController.update = async(req, res)=>{
  const id = req.params.id;
  causes.update(req.body,{
    where:{
      id
    }
  })
  .then(causes=>res.json(causes))
  .catch(err=>res.json(err))
}

//TODO probar esto
CausesController.delete= async(req, res)=>{
  const id = req.params.id;
  causes.destroy({where:{
    id
  }})
  .then(causes=>res.json(causes))
  .catch(err=>res.json(err))
}



module.exports= CausesController;