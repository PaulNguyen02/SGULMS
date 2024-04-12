const express = require('express');
const router = express.Router();
const schoolyearcontroller = require("../Controller/SchoolYearController");
const cookieParser = require('cookie-parser'); 
router.use(cookieParser());  //Để đọc được session
router.get('/List', schoolyearcontroller.List);
router.get('/Detail', schoolyearcontroller.Detail);
router.post('/Create', schoolyearcontroller.Create);
router.post('/Update', schoolyearcontroller.Update);
module.exports = router; 