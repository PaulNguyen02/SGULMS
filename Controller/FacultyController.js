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
        const faculty_id = req.body["faculty_id"];
        const faculty_name = req.body["faculty"];
        const teacher = req.body["teacher"];
        const room = req.body["room"];
        const phone = req.body["phonenumber"];
        Promise.all([faculty.Create(faculty_id, faculty_name, teacher, room, phone)]);
        res.redirect('/Khoa/List');
    }

    async Update(req,res){
        const id = req.body["faculty_id"];
        const faculty_name = req.body["faculty"];
        const teacher = req.body["teacher"];
        const room = req.body["room"];
        const phone = req.body["phonenumber"];
        Promise.all([faculty.Update(id, faculty_name, teacher, room, phone)]);
        res.redirect('/Khoa/List');
    }

    async Delete(req,res){
        const id = req.query["id"];
        Promise.all([faculty.Delete(id)]);
        res.redirect('/Khoa/List');
    }
}
module.exports = new FacultyController;