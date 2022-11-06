const express = require('express');
const Register = require('../controllers/Register.controller');
const RegisterSchema = require('../validationSchema/RegisterSchema');

const apiRoute = express.Router()


apiRoute.post('/register',RegisterSchema,Register)
apiRoute.post('/login',Login)
module.exports = apiRoute;