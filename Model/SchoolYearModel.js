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

    async Create(){

    }

    async Update(id){

    }

    async Delete(id){

    }
}
module.exports = new SchoolYearModel;