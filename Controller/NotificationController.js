const noti = require("../Model/NotificationModel");
class NotificationController{
    async List(req, res){
        const [notifications] = await Promise.all([
            noti.List()
        ]);
        if(req.cookies)
            res.render("adminhome", {
                title: 'my other page', 
                layout: 'admin_main',
                session: req.cookies.username, 
                avatar: req.cookies.avatar,
                notifications
            });
        else
            return res.render('signin', { title: 'my other page', layout: 'main1', alert });    
    }

    async Create(req, res){
        const mssv = req.body["mssv"];
        const name = req.body["name"];
        const dob = req.body["dob"];
        
        
    }

    async Update(req, res){
        const mssv = req.body["mssv"];
        const name = req.body["name"];
        const dob = req.body["dob"];
        
        
    }
    
    async Delete(req,res){

    }
}
module.exports = new NotificationController;