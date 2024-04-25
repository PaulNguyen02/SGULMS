const con = require('./BaseModel');
class FacultyModel{
    async List(){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM KHOA", 
                function (err, result) {
                    if (err){
                        reject(err);
                        return; 
                    }        
                    return resolve(result)
                });
            }
            catch(e){
                reject(e)
            }
        })  
    }

    async Create(faculty_id, faculty_name, teacher, room, phone){
        return new Promise((resolve, reject) =>{
            try{
                con.query("INSERT INTO KHOA (MAKHOA, TENKHOA, TRUONGKHOA, PHONG, SDT )"+
                "VALUES ('"+faculty_id+"', '"+faculty_name+"', '"+teacher+"','"+room+"','"+phone+"');", 
                function (err, result) {
                    if (err){
                        reject(err);
                        return; 
                    }        
                    return resolve(result)
                });
            }
            catch(e){
                reject(e)
            }
        })  
    }

    async Update(id, faculty_name, teacher, room, phone){
        return new Promise((resolve, reject) =>{
            try{
                con.query("UPDATE KHOA SET TENKHOA='"+faculty_name+"', TRUONGKHOA='"+teacher+"', PHONG='"+room+"', SDT='"+phone+"'"+
                " WHERE MAKHOA='"+id+"'",
                function (err, result) {
                    if (err){
                        reject(err);
                        return; 
                    }        
                    return resolve(result)
                });
            }
            catch(e){
                reject(e)
            }
        })  
    }

    async Delete(id){
        return new Promise((resolve, reject) =>{
            try{
                con.query("DELETE FROM KHOA WHERE MAKHOA='"+id+"'",
                function (err, result) {
                    if (err){
                        reject(err);
                        return; 
                    }        
                    return resolve(result)
                });
            }
            catch(e){
                reject(e)
            }
        })  
    }
}
module.exports = new FacultyModel;