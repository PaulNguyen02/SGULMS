const grade = require('../Model/GradeModel');
class GradeController{
    //[GET]
    async index(req, res){
        let alert = "Phiên của bạn đã hết hạn, Đăng nhập lại !";
        const [semester, grade_list] = await Promise.all([
            grade.getSemester(),
            grade.getGrade(req.cookies.id)
        ]);
        grade_list.forEach(grade => {     //Cập nhật lại các tiết thực hành
            const active_buffer = Buffer.from(grade.KETQUA);
            const active_boolean = Boolean(active_buffer.readInt8());
            grade.KETQUA = active_boolean;
        });
        if(req.cookies)
            return res.render('grade',
            {
                semester, 
                grade_list, 
                session: req.cookies.username, 
                avatar: req.cookies.avatar
            }); 
        else
            return res.render('signin', { title: 'my other page', layout: 'main1', alert });    
    }

    async list(req, res){
        let alert = "Phiên của bạn đã hết hạn, Đăng nhập lại !";
        const [semester, points] = await Promise.all([
            grade.getSemester(),
            grade.getList()
        ]);
        if(req.cookies)
            return res.render('pointmanagement',
            {               
                title: 'my other page', 
                layout: 'admin_main',
                session: req.cookies.username, 
                avatar: req.cookies.avatar,
                semester, 
                points 
            }); 
        else
            return res.render('signin', { title: 'my other page', layout: 'main1', alert });    
    }

    async update(req,res){
        
    }
}
module.exports = new GradeController;