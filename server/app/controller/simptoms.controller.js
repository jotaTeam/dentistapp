// const { Simptoms } = require('../database/db');
const { simptoms } = require('../models/index');

const controllerSimptoms ={};


controllerSimptoms.get = async (req, res)=>{
  simptoms.findAll()
  .then(simptom=>res.status(200).json({
    ok:true,
    simptom}))
  .catch(err=>res.status(500).json({
    ok:false,
    err
  }))
}
controllerSimptoms.getById = async (req, res)=>{
  simptoms.findByPk(req.params.id)
  .then(simptom=>res.status(200).json({
    ok:true,
    simptom}))
  .catch(err=>res.status(500).json({
    ok:false,
    err
  }))
}
controllerSimptoms.create = async (req, res)=>{
  simptoms.create(req.body)
  .then(simptom=>res.status(200).json({
    ok:true,
    simptom}))
  .catch(err=>res.status(500).json({
    ok:false,
    err
  }))
}
controllerSimptoms.update = async (req, res)=>{
  const id = req.params.id
  simptoms.update(req.body,{
    where:{
      id
    }
  })
  .then(simptom=>res.status(200).json({
    ok:true,
    simptom}))
  .catch(err=>res.status(500).json({
    ok:false,
    err
  }))
}
controllerSimptoms.delete = async (req, res)=>{
  
  simptoms.destroy({where:{
    id:req.params.id,
  }})
  .then(simptom=>res.status(200).json({
    ok:true,
    simptom}))
  .catch(err=>res.status(500).json({
    ok:false,
    err
  }))
}

module.exports=controllerSimptoms;