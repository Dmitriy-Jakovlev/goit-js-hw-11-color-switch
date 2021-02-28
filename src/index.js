const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
}

refs.btnStart.addEventListener('click', start);
refs.btnStop.addEventListener('click', stop);

let isActive = false;
let timeId = null;



function start() {
    if (isActive) {
        return
    }
    timeId = setInterval(backgroundColorBody, 1000);
    isActive = true;
}

function stop() {
    clearInterval(timeId);
    isActive = false;
}

const backgroundColorBody = () => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
}