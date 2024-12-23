const minutesBlock = document.querySelector('#minutes');
const secondsBlock = document.querySelector('#seconds');
const startButton = document.querySelector('#start');
const resetButton = document.querySelector('#reset');

let minutes = 10;
let seconds = 10;
let interval;

function updateTimerDisplay() {
    minutesBlock.innerText = minutes < 10 ? `0${minutes}:` : `${minutes}:`;
    secondsBlock.innerText = seconds < 10 ? `0${seconds}` : `${seconds}`;
}

function startTimer() {
    interval = setInterval(() => {
        if (seconds === 0 && minutes === 0) {
            clearInterval(interval);
        } else {
            if (seconds === 0) {
                seconds = 59;
                minutes--;
            } else {
                seconds--;
            }
        }
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    minutes = 10;
    seconds = 10;
    updateTimerDisplay();
    startButton.innerText = 'Start';
    startButton.classList.remove('stop');
    startButton.classList.add('start');
}

startButton.addEventListener('click', () => {
    if (startButton.innerText === 'Start') {
        startTimer();
        startButton.innerText = 'Stop';
        startButton.classList.remove('start');
        startButton.classList.add('stop');
    } else {
        stopTimer();
        startButton.innerText = 'Start';
        startButton.classList.remove('stop');
        startButton.classList.add('start');
    }
});

resetButton.addEventListener('click', resetTimer);

updateTimerDisplay();
