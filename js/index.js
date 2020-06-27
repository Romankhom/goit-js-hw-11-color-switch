"use strict";


const refs = {
    body: document.querySelector("body"),
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),

}

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

let active = false;
let timerid;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', startSwitch);
refs.stopBtn.addEventListener('click', stopSwitch);


function startSwitch() {

    if (active) {
        return
    }

    active = true;

    timerid = setInterval(() => {
        const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
        refs.body.style.backgroundColor = randomColor;
    }, 1000);
    stopBtn.addEventListener('click', stoptSwitch);
    startBtn.setAttribute('disabled', 'disabled');
};

function stopSwitch() {

    clearInterval(timerid);
    active = false;
    startBtn.removeAttribute('disabled');
    stopBtn.removeEventListener('click', stopSwitch);
}



