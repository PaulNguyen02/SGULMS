const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const router = express.Router();
const subjectselectcontroller = require("../Controller/SubjectselectController");
router.use(cookieParser());  //Để đọc được session
router.use(express.urlencoded({ extended: true }));
router.use(bodyParser.json());          //Phân giải các nội dung json trong parser
router.get('/Index', subjectselectcontroller.index);
router.post('/Search',subjectselectcontroller.search);
router.get('/Filter',subjectselectcontroller.filter);
router.post('/Register',subjectselectcontroller.register);
router.post('/Delete',subjectselectcontroller.delete);
router.get('/List', subjectselectcontroller.list);
router.post('/Create', subjectselectcontroller.create);
router.post('/Update', subjectselectcontroller.update);
router.post('/Purge', subjectselectcontroller.purge);
module.exports = router; 