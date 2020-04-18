const express = require('express');
const router = express.Router();

router.use('/api',require('./api'));
router.get('/',require('../contollers/api/v1/doctorsController').homePage);//route to display homepage for doctor register (optional)
module.exports = router;