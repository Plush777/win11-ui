Date.prototype.amPm = function() {
    let getAmPm = this.getHours() < 12 ? '오전' : '오후';
    return getAmPm ;
}

let today = new Date();
let amPm = today.amPm();
let getHours = today.getHours();
let getMinutes = today.getMinutes(); 
let getYear = today.getFullYear();
let getMonth = today.getMonth() + 1;
let getDate = today.getDate();
getHours = getHours % 12;
getHours = getHours ? getHours : 12;
let getYmd = getYear+"-"+(("00"+getMonth.toString()).slice(-2))+"-"+(("00"+getDate.toString()).slice(-2));

document.getElementById('ampm').innerHTML = amPm;
document.getElementById('time').innerHTML = getHours + ':' + getMinutes.toString().padStart(2, '0');
document.getElementById('date').innerHTML = getYmd;