// const { Simptoms } = require('../database/db');
const { simptoms } = require('../models/index');

const controllerSimptoms ={};


controllerSimptoms.get = async (req, res)=>{
  simptoms.findAll()
  .then(simptom=>res.json(simptom))
  .catch(err=>res.json(err))
}
controllerSimptoms.getById = async (req, res)=>{
  simptoms.findByPk(req.params.id)
  .then(simptom=>res.json(simptom))
  .catch(err=>res.json(err))
}
controllerSimptoms.create = async (req, res)=>{
  simptoms.create(req.body)
  .then(simptom=>res.json(simptom))
  .catch(err=>res.json(err))
}
controllerSimptoms.update = async (req, res)=>{
  const id = req.params.id
  simptoms.update(req.body,{
    where:{
      id
    }
  })
  .then(simptom=>res.json(simptom))
  .catch(err=>res.json(err))
}
controllerSimptoms.delete = async (req, res)=>{
  
  simptoms.destroy({where:{
    id:req.params.id,
  }})
  .then(simptom=>res.json(simptom))
  .catch(err=>res.json(err))
}

module.exports=controllerSimptoms;