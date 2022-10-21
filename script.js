
const h = document.querySelector("#h");
const b = document.body;

let base = (e) => {
    var x = e.pageX / window.innerWidth - 0.9;
    var y = e.pageY / window.innerHeight - 0.9;
    h.style.transform = `
        perspective(90vw)
        rotateX(${ y * 9  + 75}deg)
        rotateZ(${ -x * 11  + 45}deg)
        translateZ(-9vw)
    `;
}

b.addEventListener("pointermove", base);


function myfun() {
    location.href = 'https://aboaljanabi.github.io/cont/';
}
function myfun1() {
    location.href = 'https://aboaljanabi.github.io/modern-id/';
}

function myfun2() {
    location.href = 'https://aboaljanabi.github.io/myport/';
}
function myfun3() {
    location.href = 'https://aboaljanabi.github.io/2nd-room/';
}

// clock script
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
  }
  
  showTime();
