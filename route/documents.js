const express = require('express');
const router = express.Router();
const doccontroller = require('../Controller/DocumentController');
const cookieParser = require('cookie-parser'); 
router.use(cookieParser());  //Để đọc được session
router.get('/Index', doccontroller.index);
router.get('/List', doccontroller.list);
module.exports = router;