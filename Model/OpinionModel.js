const con = require("./BaseModel");
class OpinionModel{
    async List(){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM YKIEN", 
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

    }

    async Delete(id){

    }
}
module.exports = new OpinionModel;