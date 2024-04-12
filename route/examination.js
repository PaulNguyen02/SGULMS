const express = require('express');
const router = express.Router();
const examinationcontroller = require("../Controller/ExaminationController");
const cookieParser = require('cookie-parser'); 
router.use(cookieParser());  //Để đọc được session
router.get('/Index', examinationcontroller.index);
router.get('/List', examinationcontroller.list);
router.get('/Detail', examinationcontroller.detailList);
router.post('/Create', examinationcontroller.create);
router.post('/Update', examinationcontroller.update);
router.post('/Delete', examinationcontroller.delete);
module.exports = router;