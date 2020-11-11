const startbtn = document.querySelector("#start")
const watch = document.querySelector(".watch")
const resetbtn = document.querySelector("#reset")
const minutes = document.querySelector("#mins")
const hours = document.querySelector("#hrs")
const seconds = document.querySelector("#sec")
const milsec = document.querySelector("#milsec")

let timer;
let mil;
let start = false;
let hrs = 0;
let mins = 0;
let sec = 0;

function increment() {
    sec >= 59 ? (sec = 0,mins++) : sec++;
    if(mins >= 59) {mins = 0; hrs++;}

     hours.innerHTML = hrs> 9 ? hrs : `0${hrs}`;
     minutes.innerHTML = mins> 9 ? mins : `0${mins}`;
     seconds.innerHTML = sec > 9 ? sec : `0${sec}`;
}

function startMil () {
    mil = setInterval(() => {
        milsec.innerHTML = new Date().getMilliseconds().toString().split("")[0]      
    }, 1);
}

function startTimer() {
    start = !start;
    startbtn.classList.remove("start");
    startbtn.classList.add("pause");
    startbtn.innerHTML = "PAUSE";
    startMil();
    timer = setInterval(increment, 1000);
    watch.classList.add("bounce");
}

function pauseTimer() {
    startbtn.classList.remove("pause");
    startbtn.classList.add("start");
    startbtn.innerHTML = "RESUME";
    start = !start;
    stopTimer();
}

function stopTimer () {
    clearInterval(timer)
    clearInterval(mil)
    watch.classList.remove("bounce");
}


function resetTimer () {
    hrs = 0;
    mins = 0;
    sec = 0;
    startbtn.classList.add("start");
    startbtn.classList.remove("pause");
    startbtn.innerHTML = "START";
    start = false;
    stopTimer();

    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    milsec.innerHTML = "0";
}

startbtn.addEventListener("click", () => start ? pauseTimer() : startTimer());
resetbtn.addEventListener("click", resetTimer);