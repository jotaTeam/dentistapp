

// const { ProgDates } = require('../database/db');
const { prog_dates } = require('../models/index');

const ProgDatesController= {};

ProgDatesController.get = async(req, res) =>{
  prog_dates.findAll()
  .then(pd=>res.json(pd))
  .catch(err=> res.json(err))
}
ProgDatesController.getBiId = async(req, res) =>{
  prog_dates.findByPk(req.params.id)
  .then(pd=>res.json(pd))
  .catch(err=> res.json(err))
}
ProgDatesController.create = async(req, res) =>{
  prog_dates.create(req.body)
  .then(pd=>res.json(pd))
  .catch(err=> res.json(err))
}
ProgDatesController.update = async(req, res) =>{
  const id = req.params.id
  prog_dates.update(req.body,{
    where:{
      id
    }
  })
  .then(pd=>res.json(pd))
  .catch(err=> res.json(err))
}
ProgDatesController.delete = async(req, res) =>{
  const id = req.params.id
  prog_dates.destroy({
    where:{
      id
    },
  })
  .then(pd=>res.json(pd))
  .catch(err=> res.json(err))
}


module.exports = ProgDatesController;