const con =  require("./BaseModel");
class NotificationModel{
    getCurentDayTime(){
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const day = now.getDay();
        const hour = now.getHours();
        const min = now.getMinutes();
        const sec = now.getSeconds();
        return year+"-"+month+"-"+day+" "+hour+":"+min+":"+sec;
    }

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

    async Create(title, content, msgv){
        const date = this.getCurentDayTime();
        return new Promise((resolve, reject) =>{
            try{
                con.query("INSERT INTO THONGBAO (NGAYCHINHSUA, TIEUDE, NOIDUNG, MASO )"+
                "VALUES ('"+date+"', '"+title+"', '"+content+"','"+msgv+"');", 
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

    async Update(noti_id, title, content, admin_id){
        return new Promise((resolve, reject) =>{
            try{
                con.query("UPDATE THONGBAO SET TIEUDE='"+title+"', NOIDUNG='"+content+"'"+
                " WHERE STT='"+noti_id+"' AND THONGBAO.MASO='"+admin_id+"'",
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
                con.query("DELETE FROM THONGBAO WHERE STT='"+id+"'",
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

    async ASC(){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM THONGBAO ORDER BY NGAYCHINHSUA ASC", 
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

    async DESC(){
        return new Promise((resolve, reject) =>{
            try{
                con.query("SELECT * FROM THONGBAO ORDER BY NGAYCHINHSUA DESC", 
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
module.exports = new NotificationModel;