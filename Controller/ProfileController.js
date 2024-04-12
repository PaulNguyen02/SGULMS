const infomodel = require('../Model/InformationModel')
class ProfileController{
    async index(req, res){
        let alert = "Phiên của bạn đã hết hạn, Đăng nhập lại !";
        let count_sub = 0;
        let count_examsub = 0;
        const [info, current_semester, timetable, examination] = await Promise.all([
            infomodel.GetData(req.cookies.id),
            infomodel.getSemester(),
            infomodel.getTimetable(req.cookies.id),
            infomodel.getExaminationTime(req.cookies.id)          
        ]);
        timetable.forEach(subject => {     //Cập nhật lại các tiết thực hành
            count_sub++;
        });
        examination.forEach(subject => {
            count_examsub++;
        })
        if(req.cookies)
            return res.render('profile', 
            {
                info, 
                current_semester, 
                count_sub, 
                count_examsub, 
                session: req.cookies.username, 
                avatar: req.cookies.avatar
            });
        else
            return res.render('signin', { title: 'my other page', layout: 'main1', alert });
    }
}
module.exports = new ProfileController;