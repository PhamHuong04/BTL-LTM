const express = require('express');
const router = express.Router();

const logoutController = require('../app/controllers/LogoutController');
const sessionChecker = require('../middlewares/sessionChecker');



router.get('/logout-saved', logoutController.logoutSaved);
// router.get('/:slug', logoutController.show);
// router.get('/', logoutController.index);

module.exports = router;