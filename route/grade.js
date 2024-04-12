const express = require('express');
const router = express.Router();
const gradecontroller = require('../Controller/GradeController');
const cookieParser = require('cookie-parser'); 
router.use(cookieParser());  //Để đọc được session
router.get('/Index', gradecontroller.index);
router.get('/List', gradecontroller.list);
router.post('/Update', gradecontroller.update);
module.exports = router;