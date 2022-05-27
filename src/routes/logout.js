const express = require('express');
const router = express.Router();

const logoutController = require('../app/controllers/LogoutController');
const sessionChecker = require('../middlewares/sessionChecker');



router.get('/logout-saved', logoutController.logoutSaved);
router.get('/:plug', logoutController.logoutSaved);
router.get('/', logoutController.logoutSaved);

module.exports = router;