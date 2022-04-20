const { appointment } = require('../models/index');

const AppointmentController = {
    getAppointments: async(req, res) => { 
        appointment.findAll()
        .then(appointment => res.status(200).json({
            ok: true,
            appointment
        }))
        .catch(err => res.status(500).json({
            ok: false,
            err
        }))
    },
    createAppointment: async(req, res) => {
        appointment.create(req.body)
        .then(appointment => res.status(200).json({
            ok: true,
            appointment
        }))
        .catch(err => res.status(500).json({
            ok: false,
            err
        }))
    },
}

module.exports = AppointmentController;