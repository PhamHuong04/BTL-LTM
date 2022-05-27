const express = require('express');
const router = express.Router();

const bookController = require('../app/controllers/BookController');
const sessionChecker = require('../middlewares/sessionChecker');

router.get('/:plug', sessionChecker, bookController.show);

module.exports = router;