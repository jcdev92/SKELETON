//? Auth va a contener las rutas de autenticacion

//* Login
//* Register
//* Recover password
//* Verify User

const router = require('express').Router();
const authServices = require('./auth.services');
const { registerUser } = require('../users/users.services')


//? /api/v1/auth/

router.post('/register', registerUser);
router.post('/login', authServices.login);

module.exports = router;