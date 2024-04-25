const express = require('express');
const router = express.Router();
const facultycontroller = require("../Controller/FacultyController");
const cookieParser = require('cookie-parser'); 
router.use(cookieParser());  //Để đọc được session
router.use(express.json());     //Phải có express.json để truyền dữ liệu json
router.use(express.urlencoded({ extended: true }));
router.use('/List', facultycontroller.List);
router.post('/Create', facultycontroller.Create);
router.post('/Update', facultycontroller.Update);
router.get('/Delete', facultycontroller.Delete);
module.exports = router; 