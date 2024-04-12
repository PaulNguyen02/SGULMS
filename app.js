// khai báo tất cả các thư viện
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const home = require('./route');


// chạy express server và tiện ích handlebars
const app = express();
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    layoutsDir: __dirname + '/View/Layout/',
    partialsDir: __dirname + '/View/Partial/'       /*View Trỏ đến thu mục partial tìm đến file đc khai báo trong này, partial là thư mục thành phần con dùng chung trong trang */
}));
app.use(express.static(__dirname));     //Trỏ đến thư mục ngoài, cho phép truy cập vào các thụ mục Content, Script,.. 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "View"));     //Điều hướng đến thư mục view 

home(app);
app.listen(8080,()=>console.log(`Listening on port 8080`));
