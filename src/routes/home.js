const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/HomeController');
const sessionChecker = require('../middlewares/sessionChecker');

router.get('/:slug', sessionChecker, homeController.show);
router.get('/', homeController.index);

module.exports = router;