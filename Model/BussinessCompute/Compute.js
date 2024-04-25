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
            return 'A';
        if(mark >= 7.0 && mark < 8.5)
            return 'B';
        if(mark >= 5.5 && mark < 7.0)
            return 'C';
        if(mark >= 4  && mark < 5.5)
            return 'D';
        else
            return 'F';
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

    Result(ranking){
        if(ranking == 'F')
            return 0;
        else
            return 1;
    }
}
module.exports = new Compute;