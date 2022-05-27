const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController.js');
const sessionChecker = require('../middlewares/sessionChecker');

router.get('/:plug', sessionChecker, meController.infor);
router.put('/:plug', sessionChecker, meController.update);
// router.get('/edit-infor',sessionChecker, historyController.editInfor);
// router.get('/',sessionChecker, historyController.index);

module.exports = router;