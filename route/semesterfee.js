const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const router = express.Router();
const semesterfeecontroller = require("../Controller/SemesterFeeController");
router.use(cookieParser());  //Để đọc được session
router.use(express.urlencoded({ extended: true }));
router.use(bodyParser.json());          //Phân giải các nội dung json trong parser
router.get('/Index', semesterfeecontroller.index);
module.exports = router; 