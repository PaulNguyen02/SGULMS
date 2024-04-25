const express = require('express');
const router = express.Router();
const opinioncontroller = require("../Controller/OpinionController");
const cookieParser = require('cookie-parser'); 
router.use(cookieParser());  //Để đọc được session
router.get('/List', opinioncontroller.List);
router.get('/Read', opinioncontroller.Read);
router.get('/Delete', opinioncontroller.Delete);
module.exports = router; 