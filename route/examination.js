const express = require('express');
const router = express.Router();
const examinationcontroller = require("../Controller/ExaminationController");
const cookieParser = require('cookie-parser'); 
router.use(cookieParser());  //Để đọc được session
router.use(express.json());     //Phải có express.json để truyền dữ liệu json
router.use(express.urlencoded({ extended: true }));
router.get('/Index', examinationcontroller.index);
router.get('/List', examinationcontroller.list);
router.get('/Detail', examinationcontroller.detailList);
router.post('/Create', examinationcontroller.create);
router.post('/Update', examinationcontroller.update);
router.get('/Delete', examinationcontroller.delete);
router.post('/CreateDetail', examinationcontroller.create_detail);
router.post('/UpdateDetail', examinationcontroller.update_detail);
router.get('/DeleteDetail', examinationcontroller.delete_detail);
module.exports = router;