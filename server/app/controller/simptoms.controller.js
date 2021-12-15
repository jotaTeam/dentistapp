const { Simptoms } = require('../database/db');

const controllerSimptoms ={};


controllerSimptoms.get = async (req, res)=>{
  Simptoms.findAll()
  .then(simptom=>res.json(simptom))
  .catch(err=>res.json(err))
}
controllerSimptoms.getById = async (req, res)=>{
  Simptoms.findByPk(req.params.id)
  .then(simptom=>res.json(simptom))
  .catch(err=>res.json(err))
}
controllerSimptoms.create = async (req, res)=>{
  Simptoms.create(req.body)
  .then(simptom=>res.json(simptom))
  .catch(err=>res.json(err))
}
controllerSimptoms.update = async (req, res)=>{
  const id = req.params.id
  Simptoms.update(req.body,{
    where:{
      id
    }
  })
  .then(simptom=>res.json(simptom))
  .catch(err=>res.json(err))
}
controllerSimptoms.delete = async (req, res)=>{
  
  Simptoms.destroy({where:{
    id:req.params.id,
  }})
  .then(simptom=>res.json(simptom))
  .catch(err=>res.json(err))
}

module.exports=controllerSimptoms;