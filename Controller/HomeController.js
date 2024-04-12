const home = require("../Model/HomeModel");
const bussiness = require("../Model/BussinessCompute/Compute");
class HomeController {
    //[GET]
    async index(req, res){
        let alert = "Phiên của bạn đã hết hạn, Đăng nhập lại !";
        const [grade_list, registed_subject] = await Promise.all([
            home.getGrade(req.cookies.id),
            home.getRegistedList(req.cookies.id)
        ]);
        const total_credit = bussiness.TotalCredit(grade_list);
        const grade4 = bussiness.Mark4(grade_list);
        const grade10 = bussiness.Mark10(grade_list);
        const ranking = bussiness.Ranking(grade10);
        const remain_credit = bussiness.RemainCredit(total_credit);
        const fee = bussiness.TotalSubjectinSemester(registed_subject);
        if(req.cookies)
            return res.render('home',
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
        else
            return res.render('signin', { title: 'my other page', layout: 'main1', alert });
    }
}

module.exports = new HomeController;