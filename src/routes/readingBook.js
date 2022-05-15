const express = require('express');
const router = express.Router();

const readingBookController = require('../app/controllers/ReadingController');

router.get('/:plug/chapter-:chapter', readingBookController.show);

module.exports = router;