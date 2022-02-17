const express = require('express');
const router = express.Router();

const auth = require('../controller/auth.controller')

//loggear usuario
router.post('/signin', auth.signIn)


//crear usuario
router.post('/signup', auth.signUp)

module.exports = router;