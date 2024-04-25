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
        const title = req.body["title"];
        const content = req.body["content"];
        const msgv = req.cookies.id;
        Promise.all([noti.Create(title, content, msgv)]);
        res.redirect('/Thongbao/List');
    }

    async Update(req, res){
        const title = req.body["title"];
        const content = req.body["content"];
        const noti_id = req.body["noti_id"];
        const admin_id = req.body["admin_id"];
        Promise.all([noti.Update(noti_id, title, content, admin_id)]);
        res.redirect('/Thongbao/List');
    }
    
    async Delete(req,res){
        const id = req.query["id"];
        Promise.all([noti.Delete(id)]);
        res.redirect('/Thongbao/List');
    }

    async ASC(req, res){
        const [notifications] = await Promise.all([
            noti.ASC()
        ]);
        return res.render("adminhome", {notifications})
    }

    async DESC(req, res){
        const [notifications] = await Promise.all([
            noti.DESC()
        ]);
        return res.render("adminhome", {notifications})
    }
}
module.exports = new NotificationController;