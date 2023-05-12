
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