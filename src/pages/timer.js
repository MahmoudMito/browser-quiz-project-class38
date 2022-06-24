'use strict';

import { createTimerElement } from "../views/timerViews.js";

let totalSeconds = 0;
let timerIntervalId = 0;
let timerElement = null;

export const setTime = (start)=> {
  if (start) {
    if (timerIntervalId){
        clearInterval(timerIntervalId);
    }
    timerIntervalId = setInterval(increaseTimer, 1000);
    getTimerElement();
  } else if (timerIntervalId) {
    clearInterval(timerIntervalId);
    timerIntervalId = 0;
  }
}

export const getTimerElement = ()=>{
    if (!timerElement){
        timerElement = createTimerElement();
    }
    return timerElement;
}

const increaseTimer = ()=> {
    ++totalSeconds;
    timerElement.children[2].textContent = pad(totalSeconds % 60);
    timerElement.children[0].textContent = pad(parseInt(totalSeconds / 60));
}

export const clearTimer = () => {
    totalSeconds =0;
}
const pad = (number)=> {
  let valString = number + '';
  if (valString.length < 2) {
    return '0' + valString;
  } else {
    return valString;
  }
}