function getTimestamptoDayMonth(fecha){
    var d = new Date(fecha);
    var daymonth=("0" + d.getDate()).slice(-2)+ "/" +("0" + (d.getMonth() + 1)).slice(-2);
    return daymonth;
}


module.exports = {getTimestamptoDayMonth};