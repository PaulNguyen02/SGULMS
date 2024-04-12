const express = require('express');
const router = express.Router();
const virtualtutorcontroller = require('../Controller/VirtualTutorController');
router.use(express.json());     //Phải có express.json để truyền dữ liệu json
const cookieParser = require('cookie-parser'); 
router.use(cookieParser());  //Để đọc được session
router.use(express.urlencoded({ extended: true }));
router.post('/Result',virtualtutorcontroller.result);
module.exports = router;