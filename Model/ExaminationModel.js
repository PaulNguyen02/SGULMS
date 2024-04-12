const con = require("./BaseModel");
class ExaminationController{
    async getExamination(mssv){
        try{
            return new Promise((resolve, reject) =>{
                con.query("SELECT * FROM LICHTHI, THONGTINCANHAN, CTLICHTHI WHERE LICHTHI.STT = CTLICHTHI.STT AND CTLICHTHI.MASO = THONGTINCANHAN.MASO AND CTLICHTHI.MASO= '"+mssv+"'", 
                function (err, result) {
                    if (err){
                        reject(err);
                        return; 
                    }        
                    return resolve(result)
                });
            })
        }
        catch(e){
            reject(e)
        }
    }

    async getList(){
        try{
            return new Promise((resolve, reject) =>{
                con.query("SELECT * FROM LICHTHI ", 
                function (err, result) {
                    if (err){
                        reject(err);
                        return; 
                    }        
                    return resolve(result)
                });
            })
        }
        catch(e){
            reject(e)
        }
    }

    async getDetail(condition){
        try{
            return new Promise((resolve, reject) =>{
                con.query("SELECT * FROM LICHTHI, CTLICHTHI, THONGTINCANHAN WHERE LICHTHI.STT=CTLICHTHI.STT AND THONGTINCANHAN.MASO=CTLICHTHI.MASO AND LICHTHI.STT="+condition, 
                function (err, result) {
                    if (err){
                        reject(err);
                        return; 
                    }        
                    return resolve(result)
                });
            })
        }
        catch(e){
            reject(e)
        }
    }
}
module.exports = new ExaminationController;