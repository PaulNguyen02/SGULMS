const express = require('express');
const router = express.Router();
const classcontroller = require("../Controller/ClassController");
const cookieParser = require('cookie-parser'); 
router.use(cookieParser());  //Để đọc được session
router.use(express.json());     //Phải có express.json để truyền dữ liệu json
router.use(express.urlencoded({ extended: true }));
router.use('/List', classcontroller.List);
router.post('/Create', classcontroller.Create);
router.post('/Update', classcontroller.Update);
router.get('/Delete', classcontroller.Delete);
module.exports = router; 