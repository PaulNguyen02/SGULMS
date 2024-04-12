const express = require('express');
const router = express.Router();
const classcontroller = require("../Controller/ClassController");
const cookieParser = require('cookie-parser'); 
router.use(cookieParser());  //Để đọc được session
router.use('/List', classcontroller.List);
router.post('/Create', classcontroller.Create);
router.post('/Update', classcontroller.Update);
router.post('/Delete', classcontroller.Delete);
module.exports = router; 