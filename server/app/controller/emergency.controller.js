const { Emergency,MedicalInfo, Causes, Simptoms } = require('../database/db');

const EmergencyController={}
  
  EmergencyController.get= async (req, res)=>{
    Emergency.findAll({
      include: {
        model: MedicalInfo,
        include: [Causes,Simptoms]
      }  
    })
    .then(emergency=> res.json(emergency))
    .catch(err=>res.json(err))

  }

  EmergencyController.getBiId= async (req,res)=>{
    Emergency.findByPk(req.params.id)
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

  const newEmergency = async( values ) =>{
    Emergency.create(emergencyValues(values))
    .then(emergency=> {
      const emergencyId =emergency.dataValues.id
      MedicalInfo.create(medicalInfoValues(values,emergencyId))
      .then(medicalinfo=> {
        const medicalInfoId = medicalinfo.dataValues.id;
        Causes.create(causesValues(values,medicalInfoId));
        Simptoms.create(simptomsValues(values,medicalInfoId))
      })
    })
    .catch(err=>console.log(err))
  }

  const emergencyValues = ({name,phone})=>{
    return{
      name,
      phone
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


module.exports=EmergencyController;