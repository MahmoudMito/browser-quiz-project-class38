'use strict';


import {ACTIVE_BUTTON_ANIMATION} from '../constants.js';
    
/**
 * setting active button with pass function invocation on animation end event 
 * @param {String} buttonId 
 * @param {Function} passFunction 
 */
export const setButtonActive = (buttonId, passFunction)=>{
    const button = document.getElementById(buttonId);
    button.style.animation = ACTIVE_BUTTON_ANIMATION;
    button.style.animationDuration = '3s';
    button.style.animationDirection = 'normal';
    button.style.animationIterationCount = '1';
    button.style.animationTimingFunction = 'ease-in';
    button.addEventListener('animationend',passFunction);
};

/**
 * hide or show button element with function invocation on click event
 * @param {String} elementId 
 * @param {boolean} show 
 * @param {Function} passFunction 
 */
export const displayButtonElement = (elementId,show,passFunction = null)=>{
    document.getElementById(elementId).style.display = 
    show? 'block':
    'none';
    if (passFunction){
        document.getElementById(elementId).
        addEventListener('click',passFunction);
    }
  };