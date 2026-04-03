function showTime() {
    let now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let period = "AM";
    if (h>=12){
        period="PM";
    }
    if (h>12) {
        h=h-12;
    }
    if(h==0) {
        h=12;
    }
    if (h<10) h ="0"+ h;
    if (m<10)m="0" + m;
    if (s<10)s="0"+s;

    let time=h+":"+m+":"+s+" " +period;

    document.getElementById("time").innerText= time;
}
setInterval(showTime, 1000);
showTime();