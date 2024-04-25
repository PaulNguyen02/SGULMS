const con = require("./BaseModel");
class OpinionModel{
    async List(){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM YKIEN WHERE STATUS = 0", 
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

    async Read(id){
        return new Promise((resolve, reject) =>{
            try{
                con.query("UPDATE YKIEN SET STATUS = 1"+
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

    async Delete(id){
        return new Promise((resolve, reject) =>{
            try{
                con.query("DELETE FROM YKIEN WHERE STT='"+id+"'",
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
module.exports = new OpinionModel;