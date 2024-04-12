const express = require('express');
const router = express.Router();
const facultycontroller = require("../Controller/FacultyController");
const cookieParser = require('cookie-parser'); 
router.use(cookieParser());  //Để đọc được session
router.use('/List', facultycontroller.List);
router.post('/Create', facultycontroller.Create);
router.post('/Update', facultycontroller.Update);
router.post('/Delete', facultycontroller.Delete);
module.exports = router; 