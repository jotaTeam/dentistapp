

// const { ProgDates } = require('../database/db');
const { ProgDates } = require('../models/index');

const ProgDatesController= {};

ProgDatesController.get = async(req, res) =>{
  ProgDates.findAll()
  .then(pd=>res.json(pd))
  .catch(err=> res.json(err))
}
ProgDatesController.getBiId = async(req, res) =>{
  ProgDates.findByPk(req.params.id)
  .then(pd=>res.json(pd))
  .catch(err=> res.json(err))
}
ProgDatesController.create = async(req, res) =>{
  ProgDates.create(req.body)
  .then(pd=>res.json(pd))
  .catch(err=> res.json(err))
}
ProgDatesController.update = async(req, res) =>{
  const id = req.params.id
  ProgDates.update(req.body,{
    where:{
      id
    }
  })
  .then(pd=>res.json(pd))
  .catch(err=> res.json(err))
}
ProgDatesController.delete = async(req, res) =>{
  const id = req.params.id
  ProgDates.destroy({
    where:{
      id
    },
  })
  .then(pd=>res.json(pd))
  .catch(err=> res.json(err))
}


module.exports = ProgDatesController;