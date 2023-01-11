Date.prototype.amPm = function() {
    let getAmPm = this.getHours() < 12 ? '오전' : '오후';
    return getAmPm ;
}

let today = new Date();
let getYear = today.getFullYear();
let getMonth = today.getMonth() + 1;
let getDate = today.getDate();
let getYmd = getYear+"-"+(("00"+getMonth.toString()).slice(-2))+"-"+(("00"+getDate.toString()).slice(-2));

const elAmpm = document.getElementById('ampm');
const elTime = document.getElementById('time');
const elDate = document.getElementById('date');
const elAmpm2 = document.getElementById('ampm2');
const elTime2 = document.getElementById('time2');

/** 
    * @param {string} ampmDiv 오전/오후
    * @param {string} hmDiv 시/분
*/

function clock(ampmDiv, hmDiv){
    let today = new Date();
    let amPm = today.amPm();
    let getHours = today.getHours();
    let getMinutes = today.getMinutes().toString().padStart(2, '0');
    getHours = getHours % 12;
    getHours = getHours ? getHours : 12;
    let getHms = `${getHours}:${getMinutes}`
    ampmDiv.innerHTML = amPm;
    hmDiv.innerHTML = getHms;
}

clock(elAmpm, elTime);
setInterval(clock, 100, elAmpm, elTime);
clock(elAmpm2, elTime2);
elDate.innerHTML = getYmd;