const express = require('express');
const router = express.Router();
const noticontroller = require("../Controller/NotificationController");
const cookieParser = require('cookie-parser'); 
router.use(cookieParser());  //Để đọc được session
router.use(express.json());     //Phải có express.json để truyền dữ liệu json
router.use(express.urlencoded({ extended: true }));
router.use('/List', noticontroller.List);
router.post('/Create', noticontroller.Create);
router.post('/Update', noticontroller.Update);
router.get('/Delete', noticontroller.Delete);
router.get('/ASC', noticontroller.ASC);
router.get('/DESC', noticontroller.DESC);
module.exports = router; 