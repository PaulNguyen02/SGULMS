const con =  require("./BaseModel");
class StudentModel{
    async List(){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM THONGTINCANHAN WHERE QUYEN = 0", 
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

    async Create(mssv, name, dob, address, email, classes, department, faculty, year, img){
        return new Promise((resolve, reject) =>{
            try{
                con.query("INSERT INTO THONGTINCANHAN (MASO, HOTEN, NGAYSINH, DIACHI, EMAIL, LOP, NGANH, KHOA, NIENKHOA, HINHANH, QUYEN)"+
                "VALUES ('"+mssv+"', '"+name+"', '"+dob+"','"+address+"','"+email+"','"+classes+"','"+department+"','"+faculty+"','"+year+"','"+img+"', 0);", 
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

    async Update(id, name, dob, address, email, classes, department, faculty, year){
        return new Promise((resolve, reject) =>{
            try{
                con.query("UPDATE THONGTINCANHAN SET HOTEN='"+name+"', NGAYSINH='"+dob+"', DIACHI='"+address+"', EMAIL='"+email+"', LOP='"+classes+"', NGANH='"+department+"', KHOA='"+faculty+"', NIENKHOA='"+year+"'"+
                " WHERE MASO='"+id+"'",
                function (err, result) {
                    if (err){
                        reject(err);
                        console.log("Update Fail");
                        return; 
                    }        
                    console.log("Update Complete");
                    return resolve(result);                    
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
                con.query("DELETE FROM THONGTINCANHAN WHERE MASO='"+id+"'",
                function (err, result) {
                    if (err){
                        reject(err);
                        console.log("Delete Fail");
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

    async Search(id){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM THONGTINCANHAN WHERE MASO = '"+id+"' AND QUYEN = 0", function (err, result) {
                    if (err){
                        return reject(err)
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
module.exports = new StudentModel;