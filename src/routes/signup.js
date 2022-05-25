const express = require('express');
const router = express.Router();

const signupController = require('../app/controllers/SignupController');


router.get('/signup', signupController.signup);


module.exports = router;