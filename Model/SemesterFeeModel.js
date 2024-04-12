const con = require('./BaseModel');
class SemesterFeeModel{
    getCurrentday(){
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
        const day = currentDate.getDate();
        return year+"-"+month+"-"+day;
    }
    getSemester(){
        const currentDate = this.getCurrentday();
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM NIENKHOAHOCKY WHERE '"+currentDate+"' BETWEEN TGBATDAU AND TGKETTHUC ", function (err, result) {
                    if (err){
                        return reject(err)
                    }      
                    return resolve(result[0])       //Lấy ra 1 học kỳ
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
                con.query("SELECT  * FROM MONHOC, DIEM, THONGTINCANHAN WHERE MONHOC.MAMH=DIEM.MAMH AND THONGTINCANHAN.MASO=DIEM.MASO AND DIEM.MASO= '"+maso+"' GROUP BY MONHOC.MAMH", 
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
module.exports = new SemesterFeeModel;