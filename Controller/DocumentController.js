const doc = require('../Model/Document');
const path = require('path');
class ExaminationController{
    //[GET]
    async index(req, res){
        let alert = "Phiên của bạn đã hết hạn, Đăng nhập lại !";
        const documents = await doc.getData();
        if(req.cookies)
            return res.render('documents',
            {
                documents, 
                session: req.cookies.username, 
                avatar: req.cookies.avatar
            });
        else
            return res.render('signin', { title: 'my other page', layout: 'main1', alert });
    }

    async list(req, res){
        let alert = "Phiên của bạn đã hết hạn, Đăng nhập lại !";
        const documents = await doc.getData();
        if(req.cookies)
            return res.render('documentmanagement',
            {
                title: 'my other page', 
                layout: 'admin_main',
                session: req.cookies.username, 
                avatar: req.cookies.avatar,
                documents
            });
        else
            return res.render('signin', { title: 'my other page', layout: 'main1', alert });
    }

    async create(req, res){
        const title = req.body["title"];
        const date = req.body["date"];
        const link = req.body["link"];
        const uploader = req.body["uploader"];
        const subjectname = req.body["subject"];
        Promise.all([doc.Create(title, date, link, uploader, subjectname)]);
        res.redirect('/Tailieu/List');
    }


    async delete(req, res){
        const id = req.query["stt"];
        Promise.all([doc.Delete(id)]);
        res.redirect('/Tailieu/List');
    }
}
module.exports = new ExaminationController;