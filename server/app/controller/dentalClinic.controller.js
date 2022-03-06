//TODO terminar controlador clinicas

// const { DentalClinic } = require('../database/db');
const { dental_clinic } = require('../models/index');

const DentalClinicController = {};

DentalClinicController.get=(req,res)=>{
  DentalClinic.findAll()
  .then(dc=>res.status(200).json({
    ok:true,
    dc}))
  .catch(err=>res.status(500).json({
    ok:false,
    err}))
}
DentalClinicController.getById = (req,res)=>{
  dental_clinic.findByPk(req.params.id)
  .then(dc=>res.status(200).json({
    ok:true,
    dc}))
  .catch(err=>res.status(500).json({
    ok:false,
    err}))
}
DentalClinicController.create = (req,res)=>{
  dental_clinic.create(req.body)
  .then(dc=>res.status(200).json({
    ok:true,
    dc}))
  .catch(err=>res.status(500).json({
    ok:false,
    err}))
}
DentalClinicController.update = (req,res)=>{
  const id = req.params.id
  dental_clinic.update(req.body,{
    where:{
      id
    }
  })
  .then(dc=>res.status(200).json({
    ok:true,
    dc}))
  .catch(err=>res.status(500).json({
    ok:false,
    err}))
}
DentalClinicController.delete = (req,res)=>{
  const id = req.params.id;
  dental_clinic.destroy({
    where:{
      id
    }
  })
  .then(dc=>res.status(200).json({
    ok:true,
    dc}))
  .catch(err=>res.status(500).json({
    ok:false,
    err}))
}


module.exports=DentalClinicController;