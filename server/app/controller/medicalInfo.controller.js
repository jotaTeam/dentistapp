//TODO terminar controlar formulario si no

// const { MedicalInfo } = require('../database/db');
const { MedicalInfo } = require('../models/index');


const MedicalInfoController={}
MedicalInfoController.get= async(req, res)=>{
    MedicalInfo.findAll()
    .then(medInfo=>res.json(medInfo))
    .catch(err=>res.json(err))
  }
  MedicalInfoController.getById= async(req, res)=>{
    MedicalInfo.findByPk(req.params.id)
    .then(medInfo=>res.json(medInfo))
    .catch(err=>res.json(err))
  }
  MedicalInfoController.create= async(req, res)=>{
    console.log(req.body);
    MedicalInfo.create(req.body)
    .then(medInfo=>res.json(medInfo))
    .catch(err=>res.json(err))
  }
  MedicalInfoController.update= async(req, res)=>{
    const {id} = req.params;
    MedicalInfo.update(req.body,{
      where:{
        id,
      }
    })
    .then(medInfo=>res.json(medInfo))
    .catch(err=>res.json(err))
  }
  MedicalInfoController.delete= async(req, res)=>{
    const {id} = req.params;
    MedicalInfo.destroy({where:{
      id,
    }})
    .then(medInfo=>res.json(medInfo))
    .catch(err=>res.json(err))
  }


module.exports=MedicalInfoController;