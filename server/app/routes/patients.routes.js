const express = require('express');
const router = express();

const PatientController = require('../controller/patients.controller');


router.get('/', PatientController.get);
router.get('/:dni', PatientController.getById);

router.post('/', PatientController.create);

router.put('/:dni', PatientController.update);

router.delete('/:dni', PatientController.delete);



module.exports=router;