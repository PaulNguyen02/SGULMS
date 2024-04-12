const express = require('express');
const router = express.Router();
const profilecontroller = require("../Controller/ProfileController");
const cookieParser = require('cookie-parser'); 
router.use(cookieParser());  //Để đọc được session
router.use('/Index', profilecontroller.index);
module.exports = router; 