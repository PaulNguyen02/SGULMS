const cls = require("../Model/ClassModel");
class ClassesController{
    async List(req, res){
        const [classes] = await Promise.all([
            cls.List()
        ]);
        if(req.cookies)
            res.render("class", {
                title: 'my other page', 
                layout: 'admin_main',
                session: req.cookies.username, 
                avatar: req.cookies.avatar,
                classes
            });
        else
            return res.render('signin', { title: 'my other page', layout: 'main1', alert });    
    }

    async Create(req,res){

    }

    async Update(req,res){
        
    }

    async Delete(req,res){
        
    }

}
module.exports = new ClassesController;