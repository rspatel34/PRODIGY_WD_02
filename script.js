let timer;
let seconds = 0;
let isRunning = false;
let lapCount = 0;

const display = document.getElementById('display');
const lapsContainer = document.getElementById('laps');
const currentDate = document.getElementById('currentDate');

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateDisplay() {
    display.textContent = formatTime(seconds);
}

function updateCurrentDate() {
    const now = new Date();
    currentDate.textContent = now.toLocaleString();
}

document.getElementById('startBtn').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

document.getElementById('pauseBtn').addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
});

document.getElementById('resetBtn').addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    updateDisplay();
    lapsContainer.innerHTML = '';
    lapCount = 0; 
});

document.getElementById('lapBtn').addEventListener('click', () => {
    lapCount++;
    const lapTime = formatTime(seconds);
    const lapElement = document.createElement('div');
    lapElement.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapsContainer.appendChild(lapElement);
});


setInterval(updateCurrentDate, 1000);
