const express = require('express');
const router = express.Router();

router.use('/github', require('./github'));
router.use('/oddnumbers', require('./OddNumbers'));

module.exports= router;