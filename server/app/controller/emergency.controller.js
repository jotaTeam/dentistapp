// const { Emergency,MedicalInfo, Causes, Simptoms } = require('../database/db');
const { dental_emergency,medicalInfo, causes, simptoms, teeth } = require('../models/index');
const EmergencyController={}
  
  EmergencyController.get= async (req, res)=>{
    dental_emergency.findAll({
      include: {
        model: medicalInfo,
        include: [causes,simptoms]
      }  
    })
    .then(emergency=> res.json(emergency))
    .catch(err=>res.json(err))

  }

  EmergencyController.getBiId= async (req,res)=>{
    dental_emergency.findByPk(req.params.id)
    .then(emergency=> res.json(emergency))
    .catch(err=>res.json(err))

  }

  EmergencyController.create= async (req,res)=>{
    newEmergency(req.body)
    .then(res.json({msg:'Emergencia guadada'}))
    .catch(err=>console.log(err))

  }

  EmergencyController.update= async (req,res)=>{
    const {id} = req.params; 
    dental_emergency.update(req.body,{
      where:{
        id
      }
    })
    .then(emergency=> res.json(emergency))
    .catch(err=>res.json(err))

  }

  EmergencyController.delete= async (req,res)=>{
    const {id} = req.params;
    dental_emergency.destroy({where:{
      id
    }})
    .then(emergency=> res.json(emergency))
    .catch(err=>res.json(err))

  }

  //TODO metodo es una prueba para probar el que el token sea valido
  EmergencyController.getWhitAuth = async(req, res)=>{
    // let emer = await dental_emergency.findAll()
    // console.log(emer);
    // res.json(emer);
    gety(req,res)
    
    
  }
  const gety = (req,res)=>{
    dental_emergency.findAll({
      include: {
        model: medicalInfo,
        include: [causes,simptoms]
      }  
    })
    .then(emergency=> res.json(emergency))
    .catch(err=>res.json(err))
}

  const newEmergency = async( values ) =>{
    console.log(values);
    dental_emergency.create(emergencyValues(values))
    .then(emergency=> {
      const emergencyId =emergency.dataValues.id
      medicalInfo.create(medicalInfoValues(values,emergencyId))
      .then(medicalinfo=> {
        const medicalInfoId = medicalinfo.dataValues.id;
        causes.create(causesValues(values,medicalInfoId));
        simptoms.create(simptomsValues(values,medicalInfoId));
        teeth.create(teethValues(values,medicalInfoId))
        
      })
    })
    .catch(err=>console.log(err))
  }

  const emergencyValues = ({name,phone,surnames})=>{
    return{
      name,
      phone,
      surnames
    }
  }
  
  const medicalInfoValues = (values,dentalEmergencyId)=>{
    const medicalInfo = {allergy,surgery,pain_zone,descriptionAllergy,descriptionPathology} = values;
    medicalInfo.dentalEmergencyId = dentalEmergencyId
    return medicalInfo;
  }

  const simptomsValues = (values,medicalInfoId)=>{
    const simptoms = {bleeding,pain,dental_movility,ulcer,dental_stains,gums_inflammations,bad_breath,sensibility,otherSimptoms} = values;
    simptoms.medicalInfoId = medicalInfoId
    return simptoms;
  }
  const causesValues = (values,medicalInfoId)=>{
    const causes = {cavity,fracture,gums_problems,oral_hygiene,oral_disease,otherCauses} = values;
    causes.medicalInfoId = medicalInfoId;
   
    return causes;
  }

  const teethValues = (values, medicalInfoid)=>{
    const teeth = {pieces} = values
    teeth.medicalInfoId = medicalInfoid
  }


module.exports=EmergencyController;