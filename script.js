
const WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];



updateTime();

setInterval(updateTime, 100);



function updateTime() {

    var now = new Date(); //get current time & date

    document.getElementById("time").innerText =
        zeroPadding(now.getHours() % 12 || 12, 2) + ":" +
        zeroPadding(now.getMinutes(), 2) + ":" +
        zeroPadding(now.getSeconds(), 2) + ":" +
        zeroPadding(now.getMilliseconds(), 3);

    document.getElementById("date").innerText =
        now.getFullYear() + "-" +
        zeroPadding(now.getMonth() + 1, 2) + "-" +
        zeroPadding(now.getDate(), 2) + " " +
        WEEK[now.getDay()];//update current day by using name from WEEK list
}



function zeroPadding(num, digit) {
    return String(num).padStart(digit, '0');
}