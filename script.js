let is24Hour=false;
function showTime() {
    let now= new Date();
    let h= now.getHours();
    let m= now.getMinutes();
    let s= now.getSeconds();
    let period="";
    if (!is24Hour) {
        period=h>=12?"PM":"AM";
        if (h>12)h-=12;
        if (h===0)h=12;
    }
    h=h< 10 ?"0" +h:h;
    m=m< 10 ?"0" +m:m;
    s=s< 10 ?"0" +s:s;
    let time = is24Hour 
        ? `${h}:${m}:${s}` 
        : `${h}:${m}:${s} ${period}`;
    document.getElementById("time").innerText = time;
    document.getElementById("date").innerText = now.toDateString();
}
function toggleFormat() {
    is24Hour=!is24Hour;
}
function toggleTheme() {
    document.body.classList.toggle("light");
}
setInterval(showTime, 1000);
showTime();
