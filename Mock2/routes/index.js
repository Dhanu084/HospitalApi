const express = require('express');
const router = express.Router();

router.use('/api',require('./api'));
router.get('/',require('../contollers/doctorsController').homePage);
module.exports = router;