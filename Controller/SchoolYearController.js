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
        
    }

    async Update(req,res){
        
    }
}
module.exports = new SchoolYearController;