const express = require('express');
const router = express.Router();
const signincontroller  = require('../Controller/SigninController');
const cookieParser = require('cookie-parser');
router.use(cookieParser());  //Để đọc được session
router.use(express.urlencoded({ extended: true }));
router.get('/', signincontroller.index);
router.post('/Session',signincontroller.session);
module.exports = router;