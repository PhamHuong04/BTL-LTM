const express = require('express');
const router = express.Router();

const loginController = require('../app/controllers/LoginController');
const sessionChecker = require('../middlewares/sessionChecker');



router.get('/:slug', loginController.index);
router.get('/', loginController.index);
router.post('/login-saved', loginController.loginSaved);

module.exports = router;