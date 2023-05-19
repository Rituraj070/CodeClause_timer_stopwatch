
let [hours,minutes,seconds] = [0,0,0];
let showTimer = document.getElementById("showTimer");
let timer = null;


function gostart() {
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }

    let h = hours<10? "0" + hours : hours; 
    let m = minutes<10? "0" + minutes : minutes; 
    let s = seconds<10? "0" + seconds : seconds; 

    showTimer.innerHTML = h + ":" + m + ":" + s;
}

function start() {

    if(timer!=null){
        clearInterval(timer);
    }
    timer = setInterval(gostart,1000);
    
}

function pause(){
    clearInterval(timer);
}

function reset(){
    clearInterval(timer);
    [hours,minutes,seconds] = [0,0,0];
    showTimer.innerHTML = "00:00:00";
}


function clock() {
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let period = document.getElementById("period");


    h = new Date().getHours();
    m = new Date().getMinutes();
    s = new Date().getSeconds();
    p = hours >= 12 ? "PM" : "AM";

    h = (h > 12) ? h - 12 : h;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? ": 0" + m : ": "+ m;
    s = (s < 10) ? ": 0" + s : ": "+ s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    period.innerHTML = p;
};

setInterval(clock,1000);



function hide() {

    let mmm = document.getElementById("timerr");
    mmm.style.display = "none";

    let kkk = document.getElementById("cc");
    kkk.style.display = "block";
    
    
}

function show() {

    let mmm = document.getElementById("timerr");
    mmm.style.display = "flex";
    // mmm.style.display = ""

    let kkk = document.getElementById("cc");
    kkk.style.display = "none";
    
    
}
