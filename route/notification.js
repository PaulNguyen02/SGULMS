const express = require('express');
const router = express.Router();
const noticontroller = require("../Controller/NotificationController");
const cookieParser = require('cookie-parser'); 
router.use(cookieParser());  //Để đọc được session
router.use('/List', noticontroller.List);
router.post('/Create', noticontroller.Create);
router.post('/Update', noticontroller.Update);
router.post('/Delete', noticontroller.Delete);
module.exports = router; 