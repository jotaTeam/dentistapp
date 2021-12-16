const express = require('express');
const router = express.Router();

const EmergencyController = require('../controller/emergency.controller');


router.get('/', EmergencyController.get)
router.get('/:id', EmergencyController.getBiId)

router.post('/', EmergencyController.create)

router.put('/:id', EmergencyController.update)

router.delete('/:id', EmergencyController.delete)


module.exports=router;