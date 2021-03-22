function getTimestamptoDayMonth(fecha){
    var d = new Date(fecha);
    var daymonth=("0" + d.getDate()).slice(-2)+ "/" +("0" + (d.getMonth() + 1)).slice(-2);
    return daymonth;
}

function getCompareDateToNow(fecha){
    var f1 = new Date();
    var f2 = new Date(fecha);
    
    if(f1>f2){
        return 'vencida';
    }else{
        return 'vigente';
    }

    return daymonth;
}

module.exports = {getTimestamptoDayMonth,getCompareDateToNow};