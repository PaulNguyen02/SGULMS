const examination = require('../Model/ExaminationModel');
class ExaminationController{
    //[GET]
    async index(req, res){
        let alert = "Phiên của bạn đã hết hạn, Đăng nhập lại !";
        const time = await examination.getExamination(req.cookies.id);
        if(req.cookies)
            return res.render('examination',
            {
                time, 
                session: req.cookies.username, 
                avatar: req.cookies.avatar
            });
        else
            return res.render('signin', { title: 'my other page', layout: 'main1', alert });
    }

    async list(req, res){
        let alert = "Phiên của bạn đã hết hạn, Đăng nhập lại !";
        const exams = await examination.getList();
        if(req.cookies)
            return res.render('exams',
            {
                title: 'my other page', 
                layout: 'admin_main', 
                session: req.cookies.username, 
                avatar: req.cookies.avatar,
                exams
            });
        else
            return res.render('signin', { title: 'my other page', layout: 'main1', alert });
    }

    async detailList(req, res){
        const condition = req.query["stt"];
        let alert = "Phiên của bạn đã hết hạn, Đăng nhập lại !";
        const detail = await examination.getDetail(condition);
        if(req.cookies)
            return res.render('examdetail',
            {
                title: 'my other page', 
                layout: 'admin_main', 
                session: req.cookies.username, 
                avatar: req.cookies.avatar,
                detail
            });
        else
            return res.render('signin', { title: 'my other page', layout: 'main1', alert });
    }

    async create(req,res){
        
    }

    async update(req,res){
        
    }

    async delete(req,res){
        
    }
}
module.exports = new ExaminationController;