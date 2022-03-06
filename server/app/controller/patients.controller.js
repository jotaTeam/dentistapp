// const { patient } =require('../database/db');
const { patient } =require('../models/index');

const PatientsController={};

PatientsController.get = async(req, res) =>{
  patient.findAll()
  .then(patients=> res.status(200).json({
    ok:true,
    patients
  }))
  .catch(err=>res.status(500).json({
    ok:false,
    err
  }))
}

PatientsController.getById = async(req, res) =>{
  patient.findByPk(req.params.dni)
  .then(patient=> res.status(200).json({
    ok:true,
    patient
  }))
  .catch(err=>res.status(500).json({
    ok:false,
    err
  }))
}

PatientsController.create = async(req, res) =>{
  patient.create(req.body)  
  .then(patient=> res.status(200).json({
    ok:true,
    patient
  }))
  .catch(err=>res.status(500).json({
    ok:false,
    err
  }))
}

PatientsController.update = async(req, res) =>{
  const dni = req.params.dni
  patient.update(req.body,{
    where:{
      dni
    }
  })
  .then(patient=> res.status(200).json({
    ok:true,
    patient
  }))
  .catch(err=>res.status(500).json({
    ok:false,
    err
  }))
}

PatientsController.delete = async(req, res) =>{
  const dni = req.params.dni
  patient.destroy({
    where:{
      dni
    }
  })
  .then(patient=> res.status(200).json({
    ok:true,
    patient
  }))
  .catch(err=>res.status(500).json({
    ok:false,
    err
  }))
}

module.exports= PatientsController;