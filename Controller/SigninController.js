const { request } = require('express');
const user = require('../Model/SigninModel');
const bussiness = require("../Model/BussinessCompute/Compute");
const noti = require("../Model/NotificationModel");
const { render } = require('ejs');
class SigninController{
    index(req, res){
        return res.render('signin', { title: 'my other page', layout: 'main1' }) //Gọi đến một layout khác
    }
    //[POST]
    async session(req, res){
        const mssv = req.body["mssv"];
        const pass  = req.body["password"];
        let userobject = await user.Session(mssv, pass);
        if(userobject.length > 0 ){
            const authen = userobject[0].QUYEN;
            const active_buffer = Buffer.from(authen);
            const active_boolean = Boolean(active_buffer.readInt8()); 
            res.cookie('username', userobject[0].HOTEN, { maxAge: 900000, httpOnly: true }) 
            res.cookie('avatar', userobject[0].HINHANH, { maxAge: 900000, httpOnly: true }) 
            res.cookie('id', userobject[0].MASO, { maxAge: 900000, httpOnly: true }) 
            if(active_boolean == false){
                const [grade_list, registed_subject] = await Promise.all([
                    user.getGrade(req.cookies.id),
                    user.getRegistedList(req.cookies.id)
                ]);
                const total_credit = bussiness.TotalCredit(grade_list);
                const grade4 = bussiness.Mark4(grade_list);
                const grade10 = bussiness.Mark10(grade_list);
                const ranking = bussiness.Ranking(grade10);
                const remain_credit = bussiness.RemainCredit(total_credit);
                const fee = bussiness.TotalSubjectinSemester(registed_subject);
                return res.render("home", 
                {
                    grade10, 
                    grade4, 
                    ranking, 
                    total_credit, 
                    remain_credit, 
                    fee,
                    session: req.cookies.username, 
                    avatar: req.cookies.avatar
                });
            }            
            else{
                const [notifications] = await Promise.all([
                    noti.List()
                ]);
                return res.render("adminhome", {
                    title: 'my other page', 
                    layout: 'admin_main',
                    session: req.cookies.username, 
                    avatar: req.cookies.avatar,
                    notifications
                });
            }
        }else{
            let alert = "Tài khoản không hợp lệ, Đăng nhập lại !"
            return res.render('signin', { title: 'my other page', layout: 'main1', alert })
        }
    }  
}
module.exports = new SigninController;