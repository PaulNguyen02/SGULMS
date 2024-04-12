const con = require('./BaseModel');
class TimetableModel{
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
    async getList(mssv){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM MONHOC, THONGTINCANHAN, DIEM WHERE MONHOC.MAMH = DIEM.MAMH AND DIEM.MASO = THONGTINCANHAN.MASO AND DIEM.THUCHANH = MONHOC.THUCHANH AND DIEM.MASO= '"+mssv+"'", function (err, result) {
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
module.exports = new TimetableModel;