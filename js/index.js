"use strict";

const body = document.querySelector("body");
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

let active = false;
let timerid;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function startSwitch() {
  if (active) {
    return;
  }
  active = true;
  timerid = setInterval(() => {
    const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    document.body.style.backgroundColor = randomColor;
  }, 1000);
  startBtn.setAttribute("disabled", true);
}

function stopSwitch() {
  clearInterval(timerid);
  active = false;
  startBtn.disabled = false;
}

startBtn.addEventListener("click", startSwitch);
stopBtn.addEventListener("click", stopSwitch);
