const con =  require("./BaseModel");
class NotificationModel{
    async List(){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM THONGBAO", 
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
module.exports = new NotificationModel;