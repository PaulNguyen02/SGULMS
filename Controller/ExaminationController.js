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
        const id = req.body["sub_id"];
        const name = req.body["sub_name"];
        const total = req.body["num"];
        const date = req.body["date"];
        const start = req.body["start"];
        const room = req.body["room"];
        const base = req.body["base"];
        Promise.all([examination.Create(id, name, total, date , start, room, base)]);
        res.redirect('/lichthi/List');
    }

    async update(req,res){
        const id = req.body["exam_id"];
        const sub_id = req.body["sub_id"];
        const name = req.body["sub_name"];
        const total = req.body["num"];
        const date = req.body["date"];
        const start = req.body["start"];
        const room = req.body["room"];
        const base = req.body["base"];
        Promise.all([examination.Update(id, sub_id, name, total, date , start, room, base)]);
        res.redirect('/lichthi/List');
    }

    async delete(req,res){
        const id = req.query["id"];
        Promise.all([examination.Delete(id)]);
        res.redirect('/lichthi/List');
    }


    async create_detail(req,res){
        const id = req.body["id"];
        const st_id = req.body["st_id"];
        const name = req.body["name"];
        const stt = req.body["stt"];
        Promise.all([examination.Create_Detail( id, st_id, name, stt)]);
        res.redirect('/lichthi/List');
    }


    async update_detail(req,res){
        const room_id = req.body["room_id"];
        const stu_id = req.body["stu_id"];
        const name = req.body["name"];
        const stt = req.body["stt"];
        Promise.all([examination.Update_Detail(room_id, stu_id, name, stt)]);
        res.redirect('/lichthi/List');
    }

    async delete_detail(req,res){
        const id = req.query["id"];
        Promise.all([examination.Delete_Detail(id)]);
        res.redirect('/lichthi/List');
    }

}
module.exports = new ExaminationController;