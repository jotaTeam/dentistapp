const express = require('express');
const router = express.Router();

const CausesController = require('../controller/causes.controller');

router.get('/', CausesController.get);

router.get('/:id', CausesController.getById);

router.post('/',CausesController.create);

router.put('/:id',CausesController.update);

router.delete('/:id',CausesController.delete);

module.exports = router;