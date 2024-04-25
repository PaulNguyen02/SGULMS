const con =  require("./BaseModel");
class SchoolYearModel{
    async List(){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM NIENKHOAHOCKY", 
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

    async getDetail(stt){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM NIENKHOAHOCKY, CTNKHK, THONGTINCANHAN WHERE NIENKHOAHOCKY.STT = CTNKHK.STTNKHK AND THONGTINCANHAN.MASO=CTNKHK.MSSV AND NIENKHOAHOCKY.STT="+stt, 
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

    async Create(semester, start, end, schoolyear){
        return new Promise((resolve, reject) =>{
            try{
                con.query("INSERT INTO NIENKHOAHOCKY ( HOCKY, TGBATDAU, TGKETTHUC, NIENKHOA)"+
                "VALUES ('"+semester+"', '"+start+"', '"+end+"','"+schoolyear+"');", 
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

    async Update(id, semester, start, end, schoolyear){
        return new Promise((resolve, reject) =>{
            try{
                con.query("UPDATE NIENKHOAHOCKY SET HOCKY='"+semester+"', TGBATDAU='"+start+"', TGKETTHUC='"+end+"', NIENKHOA='"+schoolyear+"'"+
                " WHERE STT='"+id+"'",
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
module.exports = new SchoolYearModel;