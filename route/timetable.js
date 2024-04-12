const express = require('express');
const router = express.Router();
const timetablecontroller = require('../Controller/TimetableController');
const cookieParser = require('cookie-parser'); //Để đọc được session
router.use(cookieParser());  //Để đọc được session
router.use('/Index',timetablecontroller.index);
module.exports = router;