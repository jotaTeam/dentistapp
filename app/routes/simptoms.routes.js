const express = require('express');
const router = express.Router();

const simptomsController = require('../controller/simptoms.controller')

router.get('/',simptomsController.get);
router.get('/:id', simptomsController.getById);

router.post('/', simptomsController.create);

router.put('/:id', simptomsController.update);

router.delete('/:id',simptomsController.delete);

module.exports=router;