const timetable = require('../Model/TimetableModel');
class TimetableController{
    async index(req, res){
        let alert = "Phiên của bạn đã hết hạn, Đăng nhập lại !";
        const [semester, time] = await Promise.all([
            timetable.getSemester(),
            timetable.getList(req.cookies.id)
        ]);
        time.forEach(element => {     //Cập nhật lại các tiết thực hành
            const active_buffer = Buffer.from(element.THUCHANH);
            const active_boolean = Boolean(active_buffer.readInt8());
            element.THUCHANH = active_boolean;
        });
        if(req.cookies)
            return res.render('timetable',
            {
                semester, 
                time, 
                session: req.cookies.username, 
                avatar: req.cookies.avatar
            });
        else
            return res.render('signin', { title: 'my other page', layout: 'main1', alert });
    }
}
module.exports = new TimetableController; 