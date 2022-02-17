//TODO hacer ruta de formulario si no
const express = require('express');
const router = express();
const MedicalInfoController = require('../controller/medicalInfo.controller');



router.get('/', MedicalInfoController.get)
router.get('/:id', MedicalInfoController.getById)

router.post('/',MedicalInfoController.create)

router.put('/:id', MedicalInfoController.update)

router.delete('/:id', MedicalInfoController.delete)


module.exports=router;