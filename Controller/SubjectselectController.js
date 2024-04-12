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
    }

    //[POST]
    async register(req, res){
        const mamh = req.body["mamh"];
        const thuc_hanh = req.body["thuchanh"];
        const maso = req.cookies.id;
        let current_semester = await subject.getSemester();
        Promise.all([subject.Register(maso, mamh, current_semester["STT"] ,thuc_hanh), subject.Remainslot(mamh)]);
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
        
    }

    async update(req,res){
        
    }

    async purge(req,res){
        
    }
}
module.exports = new SubjectselectController; 
