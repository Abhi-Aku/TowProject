const express = require('express');
const { PdfPost } = require('../Controller/PdfController');
const router = express.Router();

router.post('/send', PdfPost); 

module.exports = router;