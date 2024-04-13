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
                "VALUES ('"+mssv+"', '"+name+"', '"+dob+"','"+address+"','"+email+"','"+classes+"','"+department+"','"+faculty+"','"+year+"','"+img+"',0);", 
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

    async Update(id){

    }

    async Delete(id){

    }
}
module.exports = new StudentModel;