
const express = require('express');
const ProgDatesController = require('../controller/progDates.controller');
const router = express();


router.get('/', ProgDatesController.get);
router.get('/:id', ProgDatesController.getBiId);

router.post('/', ProgDatesController.create);

router.put('/:id', ProgDatesController.update);

router.delete('/:id', ProgDatesController.delete);

module.exports=router;