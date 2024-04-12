const student = require("../Model/StudentModel");
const multer = require("multer");
var maxSize = 1 * 1000 * 1000;
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Uploads is the Upload_folder_name
        cb(null, "../Storage/Avatar/");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
});
var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {
        // Set the filetypes, it is optional
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);
 
        var extname = filetypes.test(
            path.extname(file.originalname).toLowerCase()
        );
 
        if (mimetype && extname) {
            return cb(null, true);
        }
 
        cb(
            "Error: File upload only supports the " +
                "following filetypes - " +
                filetypes
        );
    },
 
    // mypic is the name of file attribute
}).single("img");

class StudentController{
    async list(req, res){
        const [students] = await Promise.all([
            student.List()
        ]);
        if(req.cookies)
            res.render("student", {
                title: 'my other page', 
                layout: 'admin_main',
                session: req.cookies.username, 
                avatar: req.cookies.avatar,
                students
            });
        else
            return res.render('signin', { title: 'my other page', layout: 'main1', alert });    
    }

    

    async create(req, res){
        const mssv = req.body["mssv"];
        const name = req.body["name"];
        const dob = req.body["dob"];
        const address = req.body["address"];
        const email = req.body["email"];
        const classes = req.body["class"];
        const department = req.body["department"];
        const faculty = req.body["faculty"];
        const year = req.body["year"];
        const img = "../Storage/Avatar/"+ req.body["img"];
        upload(req, res, function (err) {
            if (err) {
                res.send(err);
            } else {
                Promise.all([student.Create(mssv, name, dob, address, email, classes, department, faculty, year, img)]);                
                res.send("Success, Image uploaded!");
            }
        });
        
    }

    async update(req, res){
        const name = req.body["name"];
        const dob = req.body["dob"];
        const address = req.body["address"];
        const email = req.body["email"];
        const classes = req.body["class"];
        const department = req.body["department"];
        const faculty = req.body["faculty"];
        const year = req.body["year"];
        

    }

    async delete(req, res){

    }

    
}
module.exports = new StudentController;