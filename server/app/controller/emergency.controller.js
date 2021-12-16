const { Emergency } = require('../database/db');

const EmergencyController={}
  
  EmergencyController.get= async (req, res)=>{
    Emergency.findAll()
    .then(emergency=> res.json(emergency))
    .catch(err=>res.json(err))

  }

  EmergencyController.getBiId= async (req,res)=>{
    Emergency.findByPk(req.params.id)
    .then(emergency=> res.json(emergency))
    .catch(err=>res.json(err))

  }

  EmergencyController.create= async (req,res)=>{
    Emergency.create(req.body)
    .then(emergency=> res.json(emergency))
    .catch(err=>res.json(err))

  }

  EmergencyController.update= async (req,res)=>{
    const {id} = req.params; 
    Emergency.update(req.body,{
      where:{
        id
      }
    })
    .then(emergency=> res.json(emergency))
    .catch(err=>res.json(err))

  }

  EmergencyController.delete= async (req,res)=>{
    const {id} = req.params;
    Emergency.destroy({where:{
      id
    }})
    .then(emergency=> res.json(emergency))
    .catch(err=>res.json(err))

  }


module.exports=EmergencyController;