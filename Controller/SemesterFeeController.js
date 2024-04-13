const semester_fee = require('../Model/SemesterFeeModel');
const calc = require('../Model/BussinessCompute/Compute');
class SemesterFeeController{
    async index(req, res){
        let alert = "Phiên của bạn đã hết hạn, Đăng nhập lại !";
        const maso = req.cookies.id;
        let current_semester = semester_fee.getSemester();
        let registed_subject = await semester_fee.getRegistedList(maso);
        let fee = calc.TotalSubjectinSemester(registed_subject);
        if(req.cookies)
            return res.render("semesterfee", 
            { 
                current_semester,
                registed_subject, 
                fee, 
                session: req.cookies.username, 
                avatar: req.cookies.avatar
            }); 
            //trả về 2 bộ dữ liệu nếu trong php hay nodejs, trong asp thì 2 bộ dữ liệu nên đc tạo trong một obj chung
        else
            return res.render('signin', { title: 'my other page', layout: 'main1', alert });
    }
}
module.exports = new SemesterFeeController; 