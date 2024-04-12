const con = require('./BaseModel');
class SubjectsModel{
    getList(){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM MONHOC ORDER BY MAMH LIMIT 6;", function (err, result) {
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
    getDataList(){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT DISTINCT MAMH, TENMH FROM MONHOC LIMIT 5;", function (err, result) {
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
    getSearchList(id){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM MONHOC WHERE MAMH = "+id, function (err, result) {
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
    getFacultyList(){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM KHOA", function (err, result) {
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

    getCurrentday(){
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
        const day = currentDate.getDate();
        return year+"-"+month+"-"+day;
    }

    async getSemester(){
        const currentDate = this.getCurrentday();
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM NIENKHOAHOCKY WHERE '"+currentDate+"' BETWEEN TGBATDAU AND TGKETTHUC", function (err, result) {
                    if (err){
                        return reject(err)
                    }      
                    return resolve(result[0])
                });
            }
            catch(e){
                reject(e)
            }
        })
    }

    async getRegistedList(maso){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM MONHOC, DIEM, THONGTINCANHAN WHERE MONHOC.MAMH=DIEM.MAMH AND THONGTINCANHAN.MASO=DIEM.MASO AND DIEM.THUCHANH = MONHOC.THUCHANH AND DIEM.MASO= '"+maso+"'", 
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


    async Register(maso, mamh, stt ,thuc_hanh){
        var booleanValue = (thuc_hanh.toLowerCase() == 'true');
        var values = [[maso, mamh, stt ,booleanValue]];
        
        return new Promise((resolve, reject)=>{
            try{
                con.query("INSERT INTO DIEM (maso, mamh, stt, thuchanh) VALUES ?", [values], function (err, result) {
                    if (err){
                        console.log("error");
                        return;
                    }
                    console.log("Insert Complete !");
                });                
            }catch(e){reject(e);}
        })
    }

    async Remainslot(mamh){
        return new Promise((resolve, reject)=>{
            try{                
                con.query("UPDATE MONHOC SET SISO = SISO-1 WHERE MAMH = "+mamh, function (err, result) {
                    if (err){
                        console.log("error");
                        return;
                    }
                    console.log("Update Complete !");
                });              
            }catch(e){reject(e);}
        })
    }

    async Delete(mamh, maso){
        return new Promise((resolve, reject)=>{
            try{
                con.query("DELETE FROM DIEM WHERE MAMH= '"+mamh+"' AND MASO= '"+maso+"'", function (err, result) {
                    if (err){
                        console.log("error");
                        return;
                    }
                    console.log("Delete Complete !");
                });
            }catch(e){reject(e);}
        })
    }

    async Cancel(mamh){
        return new Promise((resolve, reject)=>{
            try{                
                con.query("UPDATE MONHOC SET SISO = SISO+1 WHERE MAMH = "+mamh, function (err, result) {
                    if (err){
                        console.log("error");
                        return;
                    }
                    console.log("Update Complete !");
                });              
            }catch(e){reject(e);}
        })
    }

    async Filter(tenkhoa){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM MONHOC WHERE KHOA = '"+tenkhoa+"'", function (err, result) {
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
module.exports = new SubjectsModel;