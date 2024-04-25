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

    async Create(title, date, link, uploader, subjectname){
        return new Promise((resolve, reject) =>{
            try{
                con.query("INSERT INTO TAILIEU (TIEUDE, NGAYDANG, LINKTAI, MASO, TENMONHOC )"+
                "VALUES ('"+title+"', '"+date+"', '"+link+"','"+uploader+"','"+subjectname+"');", 
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
                con.query("DELETE FROM TAILIEU WHERE STT='"+id+"'",
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
module.exports = new Document;