'use strict';

import { loadLocalUserTime, saveLocalUserTime } from "../util/localStorage.js";
import { createTimerElement } from "../views/timerViews.js";

let totalSeconds = 0;
let timerIntervalId = 0;
let timerElement = null;

/**
 * starting/pausing quiz timer and invoking loadLocalUserTime() to recall last user time from LocalStorage
 * @param {boolean} start 
 */
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
  totalSeconds = loadLocalUserTime();
}

/**
 * return the timer element
 * @returns {Element}
 */
export const getTimerElement = ()=>{
    if (!timerElement){
        timerElement = createTimerElement();
    }
    return timerElement;
}

/**
 * increase time by one second and updating element, 
 * and call saveLocalUserTime to save the current quiz time on localStorage, 
 * this function is invoked by setInterval
 */
const increaseTimer = ()=> {
    ++totalSeconds;
    timerElement.children[2].textContent = pad(totalSeconds % 60);
    timerElement.children[0].textContent = pad(parseInt(totalSeconds / 60));
    saveLocalUserTime(totalSeconds);
}

/**
 * resetting timer
 */
export const clearTimer = () => {
    totalSeconds =0;
}

/**
 * padding a single number with zero to two digits
 * @param {Number} number 
 * @returns 
 */
const pad = (number)=> {
  let valString = number + '';
  if (valString.length < 2) {
    return '0' + valString;
  } else {
    return valString;
  }
}