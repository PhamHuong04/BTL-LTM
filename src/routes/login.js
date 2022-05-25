const express = require('express');
const router = express.Router();

const loginController = require('../app/controllers/LoginController');

// newsController.index();

router.get('/:slug', loginController.show);
router.get('/login-saved', loginController.loginSaved);
router.get('/', loginController.index);

module.exports = router;