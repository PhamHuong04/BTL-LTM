const express = require('express');
const router = express.Router();

const logoutController = require('../app/controllers/LogoutController');
const sessionChecker = require('../middlewares/sessionChecker');



router.get('/logout-saved', sessionChecker, logoutController.logoutSaved);
router.get('/:plug', sessionChecker, logoutController.logoutSaved);
router.get('/', sessionChecker, logoutController.logoutSaved);

module.exports = router;