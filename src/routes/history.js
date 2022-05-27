const express = require('express');
const router = express.Router();

const historyController = require('../app/controllers/HistoryController');
const sessionChecker = require('../middlewares/sessionChecker');

router.get('/:slug',sessionChecker, historyController.show);
router.get('/',sessionChecker, historyController.index);

module.exports = router;