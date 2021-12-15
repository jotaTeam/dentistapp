const { Patients } =require('../database/db');

const PatientsController={};

PatientsController.get = async(req, res) =>{
  Patients.findAll()
  .then(patients=> res.json(patients))
  .catch(err=>res.json(err))
}

PatientsController.getById = async(req, res) =>{
  Patients.findByPk(req.body.dni)
  .then(patient=> res.json(patient))
  .catch(err=>res.json(err))
}

PatientsController.create = async(req, res) =>{
  Patients.create(req.body)  
  .then(patient=> res.json(patient))
  .catch(err=>res.json(err))
}

PatientsController.update = async(req, res) =>{
  const {dni} = req.body
  Patients.update(req.body,{
    where:{
      dni
    }
  })
  .then(patient=> res.json(patient))
  .catch(err=>res.json(err))
}

PatientsController.delete = async(req, res) =>{
  const {dni} = req.body
  Patients.destroy({
    where:{
      dni
    }
  })
  .then(patient=> res.json(patient))
  .catch(err=>res.json(err))
}

module.exports= PatientsController;