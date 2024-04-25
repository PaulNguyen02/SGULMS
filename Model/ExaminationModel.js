const con = require("./BaseModel");
class ExaminationController{
    async getExamination(mssv){
        try{
            return new Promise((resolve, reject) =>{
                con.query("SELECT * FROM LICHTHI, THONGTINCANHAN, CTLICHTHI WHERE LICHTHI.STT = CTLICHTHI.STT AND CTLICHTHI.MASO = THONGTINCANHAN.MASO AND CTLICHTHI.MASO= '"+mssv+"'", 
                function (err, result) {
                    if (err){
                        reject(err);
                        return; 
                    }        
                    return resolve(result)
                });
            })
        }
        catch(e){
            reject(e)
        }
    }

    async getList(){
        try{
            return new Promise((resolve, reject) =>{
                con.query("SELECT * FROM LICHTHI ", 
                function (err, result) {
                    if (err){
                        reject(err);
                        return; 
                    }        
                    return resolve(result)
                });
            })
        }
        catch(e){
            reject(e)
        }
    }

    async getDetail(condition){
        try{
            return new Promise((resolve, reject) =>{
                con.query("SELECT * FROM LICHTHI, CTLICHTHI, THONGTINCANHAN WHERE LICHTHI.STT=CTLICHTHI.STT AND THONGTINCANHAN.MASO=CTLICHTHI.MASO AND LICHTHI.STT="+condition, 
                function (err, result) {
                    if (err){
                        reject(err);
                        return; 
                    }        
                    return resolve(result)
                });
            })
        }
        catch(e){
            reject(e)
        }
    }

    async Create(id, name, total, date , start, room, base){
        return new Promise((resolve, reject) =>{
            try{
                con.query("INSERT INTO LICHTHI (MAMH, TENMH, SISO, NGAYTHI, GIOBD, PHONGTHI, COSO )"+
                "VALUES ('"+id+"', '"+name+"', '"+total+"','"+date+"','"+start+"','"+room+"','"+base+"');", 
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

    async Update(id, sub_id, name, total, date , start, room, base){
        return new Promise((resolve, reject) =>{
            try{
                con.query("UPDATE LICHTHI SET TENMH='"+name+"', SISO='"+total+"', NGAYTHI='"+date+"', GIOBD='"+start+"', PHONGTHI='"+room+"', COSO='"+base+"'"+
                " WHERE STT='"+id+"' AND MAMH='"+sub_id+"'",
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
                con.query("DELETE FROM LICHTHI WHERE STT='"+id+"'",
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


    async Create_Detail( id, st_id, name, stt){
        return new Promise((resolve, reject) =>{
            try{
                con.query("INSERT INTO CTLICHTHI (STT, MASO, STTPHONGTHI, TENSV )"+
                " VALUES ("+id+",'"+st_id+"','"+stt+"','"+name+"');", 
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

    async Update_Detail(room_id, stu_id, name, stt){
        return new Promise((resolve, reject) =>{
            try{
                con.query("UPDATE CTLICHTHI SET STTPHONGTHI='"+stt+"', TENSV='"+name+"'" +
                " WHERE STT='"+room_id+"' AND MASO='"+stu_id+"'",
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

    async Delete_Detail(id){
        return new Promise((resolve, reject) =>{
            try{
                con.query("DELETE FROM CTLICHTHI WHERE STT='"+id+"'",
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
module.exports = new ExaminationController;