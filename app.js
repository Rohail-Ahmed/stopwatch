var hour = 0;
var min = 0;
var sec = 0;
var milisec = 0;
var hourHead = document.getElementById('hour');
var minHead = document.getElementById('min');
var secHead = document.getElementById('sec');
var milisecHead = document.getElementById('milisec');
var interval;

function timer(){
    milisec++
    milisecHead.innerHTML = milisec;
    if(milisec >=100){
        sec++
        secHead.innerHTML = sec;
        milisec=0;
    }
    else if(sec >=60){
        min++
        sec =0;
        minHead.innerHTML = min;

    }
    else if(min >=60){
        hour++
        min=0;
        hourHead.innerHTML = hour;
    }
    
}
function start(){
interval = setInterval(timer,10)
document.getElementById('dis').disabled=true;
}

function stop(){
    clearInterval(interval)
    document.getElementById('dis').disabled=false;
}
function reset(){
    hour =0;
    min =0;
    sec =0;
    milisec =0;
    hourHead.innerHTML = hour;
    minHead.innerHTML = min;
    secHead.innerHTML = sec;
    milisecHead.innerHTML=milisec;
    document.getElementById('dis').disabled=false;
}
 
