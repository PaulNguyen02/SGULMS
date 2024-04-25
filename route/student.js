const express = require('express');
const router = express.Router();
const studentcontroller = require("../Controller/StudentController");
router.use(express.json());     //Phải có express.json để truyền dữ liệu json
const cookieParser = require('cookie-parser'); 
router.use(cookieParser());  //Để đọc được session
router.use(express.urlencoded({ extended: true }));
router.get('/List', studentcontroller.list);
router.post('/Create', studentcontroller.create);
router.post('/Update', studentcontroller.update);
router.get('/Delete', studentcontroller.delete);
router.post('/Search', studentcontroller.search);
module.exports = router;