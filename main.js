let second = 0;
let minute = 0;
let hour = 0;

const buttonPlay = document.getElementById("play");
const buttonPause = document.getElementById("pause");
const buttonStop = document.getElementById("stop");
const timer = document.getElementById("timer");

let countTime;

const eventsButton = {
    play() {
        countTime = setInterval(time, 1000);
    },

    pause() {
        clearInterval(countTime);
    },

    stop() {
        clearInterval(countTime);
        second = 0;
        minute = 0;
        hour = 0;

        timer.innerHTML = `${formatTime(hour)}:${formatTime(
            minute
        )}:${formatTime(second)}`;
    },
};

buttonPlay.addEventListener("click", eventsButton.play);
buttonPause.addEventListener("click", eventsButton.pause);
buttonStop.addEventListener("click", eventsButton.stop);

function formatTime(timer) {
    if (timer < 10) {
        return `0${timer}`;
    } else {
        return timer;
    }
}

function time() {
    second++;

    if (second === 60) {
        minute += 1;
        second = 0;

        if (minute === 60) {
            hour += 1;
            minute = 0;
        }
    }

    timer.innerHTML = `${formatTime(hour)}:${formatTime(minute)}:${formatTime(
        second
    )}`;
}
