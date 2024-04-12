class Compute{

    SubjectFee(stc){      //Tính học phí
        return stc* 370000;
    }

    TotalSubjectinSemester(list){
        let total = 0;
        list.forEach(subject => {     //Cập nhật lại các tiết thực hành
            total+=this.SubjectFee(subject.STC);
        });
        return total;
    }

    Mark4(list){
        let result = 0;
        let total = 0;
        let totalstc = 0;
        list.forEach(subject => {     //Cập nhật lại các tiết thực hành
            total+=subject.DIEMTONGKET4 * subject.STC;
            totalstc+=subject.STC;
        });
        result = total/totalstc;
        return this.Round(result);
    }

    Mark10(list){
        let result = 0;
        let total = 0;
        let totalstc = 0;
        list.forEach(subject => {     //Cập nhật lại các tiết thực hành
            total+=subject.DIEMTONGKET10 * subject.STC;
            totalstc+=subject.STC;
        });
        result = total/totalstc;
        return this.Round(result);
    }
    
    Round(mark){
        return (Math.round(mark * 100) / 100).toFixed(2);
    }
    
    Ranking(mark){
        if(mark >= 8.5)
            return "Giỏi";
        if(mark >= 7.0 && mark < 8.5)
            return "Khá";
        if(mark >= 5.5 && mark < 7.0)
            return "Trung bình";
        if(mark >= 4  && mark < 5.5)
            return "Yếu";
        else
            return "Kém";
    }

    Decision(mark){
        if(mark >= 4)
            return 1;
        else
            return 0;
    }

    TotalCredit(list){
        let totalstc = 0;
        list.forEach(subject => {     //Cập nhật lại các tiết thực hành
            totalstc+=subject.STC;
        });
        return totalstc;
    }

    RemainCredit(total){
        return 155-total;
    }
}
module.exports = new Compute;