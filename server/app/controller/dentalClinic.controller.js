//TODO terminar controlador clinicas

const { DentalClinic } = require('../database/db');

const DentalClinicController = {};

DentalClinicController.get=(req,res)=>{
  DentalClinic.findAll()
  .then(dc=>res.json(dc))
  .catch(err=>res.json(err))
}
DentalClinicController.getById = (req,res)=>{
  DentalClinic.findByPk(req.params.id)
  .then(dc=>res.json(dc))
  .catch(err=>res.json(err))
}
DentalClinicController.create = (req,res)=>{
  DentalClinic.create(req.body)
  .then(dc=>res.json(dc))
  .catch(err=>res.json(err))
}
DentalClinicController.update = (req,res)=>{
  const id = req.params.id
  DentalClinic.update(req.body,{
    where:{
      id
    }
  })
  .then(dc=>res.json(dc))
  .catch(err=>res.json(err))
}
DentalClinicController.delete = (req,res)=>{
  const id = req.params.id;
  DentalClinic.destroy({
    where:{
      id
    }
  })
  .then(dc=>res.json(dc))
  .catch(err=>res.json(err))
}


module.exports=DentalClinicController;