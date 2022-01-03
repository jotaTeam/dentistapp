//TODO terminar controlador clinicas

// const { DentalClinic } = require('../database/db');
const { dental_clinic } = require('../models/index');

const DentalClinicController = {};

DentalClinicController.get=(req,res)=>{
  DentalClinic.findAll()
  .then(dc=>res.json(dc))
  .catch(err=>res.json(err))
}
DentalClinicController.getById = (req,res)=>{
  dental_clinic.findByPk(req.params.id)
  .then(dc=>res.json(dc))
  .catch(err=>res.json(err))
}
DentalClinicController.create = (req,res)=>{
  dental_clinic.create(req.body)
  .then(dc=>res.json(dc))
  .catch(err=>res.json(err))
}
DentalClinicController.update = (req,res)=>{
  const id = req.params.id
  dental_clinic.update(req.body,{
    where:{
      id
    }
  })
  .then(dc=>res.json(dc))
  .catch(err=>res.json(err))
}
DentalClinicController.delete = (req,res)=>{
  const id = req.params.id;
  dental_clinic.destroy({
    where:{
      id
    }
  })
  .then(dc=>res.json(dc))
  .catch(err=>res.json(err))
}


module.exports=DentalClinicController;