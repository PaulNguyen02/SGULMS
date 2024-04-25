const con =  require("./BaseModel");
class ClassModel{
    async List(){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM LOP", 
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

    async Create(class_id, faculty, year, number, teacher){
        return new Promise((resolve, reject) =>{
            try{
                con.query("INSERT INTO LOP (MALOP, KHOA, NIENKHOA, SISO, CVHT )"+
                "VALUES ('"+class_id+"', '"+faculty+"', '"+year+"','"+number+"','"+teacher+"');", 
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

    async Update(id, faculty, year, number, teacher){
        return new Promise((resolve, reject) =>{
            try{
                con.query("UPDATE LOP SET KHOA='"+faculty+"', NIENKHOA='"+year+"', SISO='"+number+"', CVHT='"+teacher+"'"+
                " WHERE MALOP='"+id+"'",
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
                con.query("DELETE FROM LOP WHERE MALOP='"+id+"'",
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
module.exports = new ClassModel;