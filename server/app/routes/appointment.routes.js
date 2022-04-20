const express = require('express');
const router = express.Router();

const AppointmentController = require('../controller/appointment.controller');

router.get('/', AppointmentController.getAppointments);

router.post('/', AppointmentController.createAppointment);

module.exports = router;