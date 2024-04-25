const grade = require('../Model/GradeModel');
const compute = require('../Model/BussinessCompute/Compute');
class GradeController{
    //[GET]
    async index(req, res){
        let alert = "Phiên của bạn đã hết hạn, Đăng nhập lại !";
        const [semester, grade_list] = await Promise.all([
            grade.getSemester(),            
            grade.getGrade(req.cookies.id)
        ]);

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
        const subject_id = req.body["subject_id"];
        const student_id = req.body["student_id"];
        const mid10 = req.body["mid10"];
        const exam10 = req.body["exam10"];
        const final10 = req.body["final10"];
        const final4 = req.body["final4"];
        const ranking = compute.Ranking(final10);
        const result = compute.Result(ranking);
        Promise.all([grade.Update(subject_id, student_id, mid10, exam10, final10, final4, ranking, result)]);
        res.redirect('/Diem/List');
    }
}
module.exports = new GradeController;