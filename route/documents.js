const express = require('express');
const router = express.Router();
const doccontroller = require('../Controller/DocumentController');
const cookieParser = require('cookie-parser'); 
router.use(cookieParser());  //Để đọc được session
router.use(express.json());     //Phải có express.json để truyền dữ liệu json
router.use(express.urlencoded({ extended: true }));
router.get('/Index', doccontroller.index);
router.get('/List', doccontroller.list);
router.post('/Create', doccontroller.create);
router.get('/Delete', doccontroller.delete);
module.exports = router;