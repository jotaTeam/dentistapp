// const { patient } =require('../database/db');
const { patient } =require('../models/index');

const PatientsController={};

PatientsController.get = async(req, res) =>{
  patient.findAll()
  .then(patients=> res.json(patients))
  .catch(err=>res.json(err))
}

PatientsController.getById = async(req, res) =>{
  patient.findByPk(req.params.dni)
  .then(patient=> res.json(patient))
  .catch(err=>res.json(err))
}

PatientsController.create = async(req, res) =>{
  patient.create(req.body)  
  .then(patient=> res.json(patient))
  .catch(err=>res.json(err))
}

PatientsController.update = async(req, res) =>{
  const dni = req.params.dni
  patient.update(req.body,{
    where:{
      dni
    }
  })
  .then(patient=> res.json(patient))
  .catch(err=>res.json(err))
}

PatientsController.delete = async(req, res) =>{
  const dni = req.params.dni
  patient.destroy({
    where:{
      dni
    }
  })
  .then(patient=> res.json(patient))
  .catch(err=>res.json(err))
}

module.exports= PatientsController;