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
        const class_id = req.body["class_id"]; 
        const faculty = req.body["faculty"]; 
        const year = req.body["years"]; 
        const number = req.body["total"]; 
        const teacher = req.body["teacher"];
        Promise.all([cls.Create(class_id, faculty, year, number, teacher)]);
        res.redirect('/Lop/List');
    }

    async Update(req,res){
        const id = req.body["class_id"];
        const faculty = req.body["faculty"]; 
        const year = req.body["years"]; 
        const  number = req.body["total"]; 
        const teacher = req.body["teacher"];
        Promise.all([cls.Update(id, faculty, year, number, teacher)]);
        res.redirect('/Lop/List');
    }

    async Delete(req,res){
        const id = req.query["id"];
        Promise.all([cls.Delete(id)]);
        res.redirect('/Lop/List');
    }

}
module.exports = new ClassesController;