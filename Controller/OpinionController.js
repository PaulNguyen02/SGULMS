const opinion = require("../Model/OpinionModel");
class ClassesController{
    async List(req, res){
        const [opinions] = await Promise.all([
            opinion.List()
        ]);
        if(req.cookies)
            res.render("opinion", {
                title: 'my other page', 
                layout: 'admin_main',
                session: req.cookies.username, 
                avatar: req.cookies.avatar,
                opinions
            });
        else
            return res.render('signin', { title: 'my other page', layout: 'main1', alert });    
    }

    async Read(req,res){
        const id = req.query["id"];
        Promise.all([opinion.Read(id)]);
        res.redirect('/Ykien/List');
    }

    async Delete(req,res){
        const id = req.query["id"];
        Promise.all([opinion.Delete(id)]);
        res.redirect('/Ykien/List');
    }
}
module.exports = new ClassesController;