const year = require("../Model/SchoolYearModel");
class SchoolYearController{
    async List(req, res){
        const [schoolyear] = await Promise.all([
            year.List()
        ]);
        if(req.cookies)
            res.render("schoolyear", {
                title: 'my other page', 
                layout: 'admin_main',
                session: req.cookies.username, 
                avatar: req.cookies.avatar,
                schoolyear
            });
        else
            return res.render('signin', { title: 'my other page', layout: 'main1', alert });    
    }

    async Detail(req, res){
        const stt = req.query["stt"];
        const [detail] = await Promise.all([
            year.getDetail(stt)
        ]);
        if(req.cookies)
            res.render("schoolyeardetail", {
                title: 'my other page', 
                layout: 'admin_main',
                session: req.cookies.username, 
                avatar: req.cookies.avatar,
                detail
            });
        else
            return res.render('signin', { title: 'my other page', layout: 'main1', alert });  
    }

    async Create(req,res){
        const semester = req.body["semester"]; 
        const start = req.body["start"]; 
        const end = req.body["end"]; 
        const schoolyear = req.body["schoolyear"]; 
        Promise.all([year.Create(semester, start, end, schoolyear)]);
        res.redirect('/Nienkhoa/List');
    }

    async Update(req,res){
        const id = req.body["sy_id"];
        const semester = req.body["semester"]; 
        const start = req.body["start"]; 
        const end = req.body["end"]; 
        const schoolyear = req.body["schoolyear"]; 
        Promise.all([year.Update(id, semester, start, end, schoolyear)]);
        res.redirect('/Nienkhoa/List');
    }
}
module.exports = new SchoolYearController;