const con = require('./BaseModel');
class FacultyModel{
    async List(){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM KHOA", 
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
module.exports = new FacultyModel;