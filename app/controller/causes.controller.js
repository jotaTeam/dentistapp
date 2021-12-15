const { Causes } = require('../database/db');
const causes = require('../models/causes');

const CausesController ={};

CausesController.create = async(req, res)=>{
  Causes.create(req.body)
  .then(causes=>res.json(causes))
}

CausesController.get= async(req,res)=>{
  Causes.findAll()
  .then(causes=>res.json(causes))
  .catch(err=>res.json(err))
}

CausesController.getById= async(req,res)=>{
  Causes.findByPk(req.params.id)
  .then(causes=>res.json(causes))
  .catch(err=>res.json(err))
}

CausesController.update = async(req, res)=>{
  const id = req.params.id;
  Causes.update(req.body,{
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
  Causes.destroy({where:{
    id
  }})
  .then(causes=>res.json(causes))
  .catch(err=>res.json(err))
}

causes

module.exports= CausesController;