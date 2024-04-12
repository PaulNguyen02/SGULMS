const faculty = require("../Model/FacultyModel");
class FacultyController{
    async List(req, res){
        const [faculties] = await Promise.all([
            faculty.List()
        ]);
        if(req.cookies)
            res.render("faculty", {
                title: 'my other page', 
                layout: 'admin_main',
                session: req.cookies.username, 
                avatar: req.cookies.avatar,
                faculties
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
module.exports = new FacultyController;