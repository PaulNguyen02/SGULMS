const subject = require('../Model/SubjectsModel');
const calc = require('../Model/BussinessCompute/Compute');
class SubjectselectController{
    //[GET]
    async index(req, res){
        let alert = "Phiên của bạn đã hết hạn, Đăng nhập lại !";
        const maso = req.cookies.id;
        const [datalist, result, faculty_list, current_semester, registed_subject] = await Promise.all([
            subject.getDataList(),
            subject.getList(),
            subject.getFacultyList(),
            subject.getSemester(),
            subject.getRegistedList(maso)
        ]);
        result.forEach(element => {     //Cập nhật lại các tiết thực hành
            const active_buffer = Buffer.from(element.THUCHANH);
            const active_boolean = Boolean(active_buffer.readInt8());
            element.THUCHANH = active_boolean;
        });
        registed_subject.forEach(element => {     //Cập nhật lại các tiết thực hành
            const active_buffer = Buffer.from(element.THUCHANH);
            const active_boolean = Boolean(active_buffer.readInt8());
            element.THUCHANH = active_boolean;
        });
        if(req.cookies)
            return res.render("subjectselect",
            {
                result, 
                datalist, 
                faculty_list, 
                current_semester, 
                registed_subject, 
                session: req.cookies.username, 
                avatar: req.cookies.avatar
            }); 
            //trả về 2 bộ dữ liệu nếu trong php hay nodejs, trong asp thì 2 bộ dữ liệu nên đc tạo trong một obj chung
        else
            return res.render('signin', { title: 'my other page', layout: 'main1', alert });
    }
    //[POST]
    async search(req, res){
        const id = req.body["search"];        
        const [faculty_list, result, current_semester] = await Promise.all([
            subject.getFacultyList(),
            subject.getSearchList(id),
            subject.getSemester()
        ]);
        result.forEach(element => {     //Cập nhật lại các tiết thực hành
            const active_buffer = Buffer.from(element.THUCHANH);
            const active_boolean = Boolean(active_buffer.readInt8());
            element.THUCHANH = active_boolean;
        });
        return res.render("subjectselect",{result, faculty_list, current_semester});
    }

    async delete(req, res){
        const mamh = req.body["mamh"];
        const maso = req.cookies.id;       
        Promise.all([subject.Delete(mamh, maso), subject.Cancel(mamh)]);
        res.redirect('/Dkmh/Index');
    }

    //[POST]
    async register(req, res){
        const mamh = req.body["mamh"];
        const thuc_hanh = req.body["thuchanh"];
        const maso = req.cookies.id;
        let current_semester = await subject.getSemester();
        Promise.all([subject.Register(maso, mamh, current_semester["STT"] ,thuc_hanh), subject.Remainslot(mamh)]);
        res.redirect('/Dkmh/Index');
    }

    //[GET]
    async filter(req, res){
        const faculty = req.query.tenkhoa;  //Lấy param trong express js
        const [faculty_list, result, current_semester] = await Promise.all([
            subject.getFacultyList(),
            subject.Filter(faculty),
            subject.getSemester()
        ]);
        result.forEach(element => {     //Cập nhật lại các tiết thực hành
            const active_buffer = Buffer.from(element.THUCHANH);
            const active_boolean = Boolean(active_buffer.readInt8());
            element.THUCHANH = active_boolean;
        });
        return res.render("subjectselect",{result, faculty_list, current_semester});
    }

    async list(req, res){
        let alert = "Phiên của bạn đã hết hạn, Đăng nhập lại !";
        const [ results ] = await Promise.all([
            subject.getList(),
        ]);
        results.forEach(element => {     //Cập nhật lại các tiết thực hành
            const active_buffer = Buffer.from(element.THUCHANH);
            const active_boolean = Boolean(active_buffer.readInt8());
            element.THUCHANH = active_boolean;
        });
        if(req.cookies)
            return res.render("subjects",
            {
                title: 'my other page', 
                layout: 'admin_main', 
                session: req.cookies.username, 
                avatar: req.cookies.avatar,
                results
            }); 
            //trả về 2 bộ dữ liệu nếu trong php hay nodejs, trong asp thì 2 bộ dữ liệu nên đc tạo trong một obj chung
        else
            return res.render('signin', { title: 'my other page', layout: 'main1', alert });
    }

    async create(req,res){
        let practice = null;
        const id = req.body["subject_id"];
        const subject_name = req.body["subject"];
        const group = req.body["group"];
        const total = req.body["total"];
        const token = req.body["token"];
        const classes = req.body["class"];
        const dayinweek = req.body["dayinweek"];
        const start = req.body["start"];
        const number = req.body["number"];
        const room = req.body["room"];
        const teacher = req.body["teacher"];
        const weekstart = req.body["weekstart"];
        const fee = req.body["fee"];
        const faculty =  req.body["faculty"];
        if(req.body["yes"])
            practice = 1; 
        if(req.body["no"])
            practice = 0; 
        Promise.all([subject.Create(id, subject_name, group, total, token, classes, dayinweek, start, number, room, teacher, weekstart, fee ,faculty, practice)]);
        res.redirect('/Dkmh/List');
    }

    async update(req,res){
        const subject_id = req.body["subject_id"];
        const subject_name = req.body["subject"];
        const group = req.body["group"];
        const total = req.body["total"];
        const token = req.body["token"];
        const classes = req.body["class"];
        const dayinweek = req.body["dayinweek"];
        const start = req.body["start"];
        const number = req.body["number"];
        const room = req.body["room"];
        const teacher = req.body["teacher"];
        const weekstart = req.body["weekstart"];
        const fee = req.body["fee"];
        const faculty =  req.body["faculty"];
        const practice =  req.body["practice"];
        Promise.all([subject.Update(subject_id, subject_name, group, total, token, classes, dayinweek, start, number, room, teacher, weekstart, fee, faculty, practice)]);
        res.redirect('/Dkmh/List');
    }

    async purge(req,res){
        const id = req.query["id"];
        const group = req.query["group"];
        const practice = req.query["practice"];
        Promise.all([subject.Purge(id, group, practice)]);
        res.redirect('/Dkmh/List');
    }
}
module.exports = new SubjectselectController; 
