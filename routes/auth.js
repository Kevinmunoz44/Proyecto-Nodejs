const express = require('express');
const router = express.Router();
const {validatorRegister, validatorLogin} = require('../validators/auth');
const {registerCtrl, loginCtrl} = require('../controller/auth')

//TODO http://localhost:3001/api/auth/login
//TODO http://localhost:3001/api/auth/register
/**
 * Actualiza
 */
router.post('/register', validatorRegister, registerCtrl);

router.post('/login', validatorLogin, loginCtrl);

module.exports = router;
