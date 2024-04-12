const con = require('./BaseModel');
class InformationModel{
    async GetData(mssv){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM THONGTINCANHAN WHERE MASO = '"+mssv+"'", function (err, result) {
                    if (err){
                        return reject(err)
                    }      
                    return resolve(result[0])       //Lấy thông tin của 1 sinh viên đang sử dụng
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

    async getTimetable(mssv){
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

    async getExaminationTime(mssv){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM LICHTHI, THONGTINCANHAN, CTLICHTHI WHERE LICHTHI.STT = CTLICHTHI.STT AND CTLICHTHI.MASO = THONGTINCANHAN.MASO AND CTLICHTHI.MASO= '"+mssv+"'", function (err, result) {
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
module.exports = new InformationModel;