const express = require('express');
const router = express.Router();
const homecontroller = require('../Controller/HomeController');
const cookieParser = require('cookie-parser'); 
router.use(cookieParser());  //Để đọc được session
router.get('/Index', homecontroller.index);
module.exports = router;