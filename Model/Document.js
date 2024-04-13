const con = require('./BaseModel');
class Document{
    async getData(){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM TAILIEU ", function (err, result) {
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
    
    async Download(download_link){
        const folderPath = '/path/to/your/folder';
    }

    async Create(){

    }

    async Delete(id){
        
    }
}
module.exports = new Document;