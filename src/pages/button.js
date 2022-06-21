'use strict';


import {ACTIVE_BUTTON_ANIMATION,
    NEXT_QUESTION_BUTTON_ID} from '../constants.js'
import { initQuestionPage } from './questionPage.js';
    

export const setButtonActive = (buttonId, passFunction)=>{
    const button = document.getElementById(buttonId);
    button.style.animation = ACTIVE_BUTTON_ANIMATION;
    button.style.animationDuration = '3s';
    button.style.animationDirection = 'normal';
    button.style.animationIterationCount = '1';
    button.style.animationTimingFunction = 'ease-in';
    button.addEventListener('animationend',passFunction);
};


export const setNextButton = (show)=>{
    document.getElementById(NEXT_QUESTION_BUTTON_ID).style.display = 
    show? 'block':
    'none';
    document.getElementById(NEXT_QUESTION_BUTTON_ID).
    addEventListener('click',initQuestionPage);
  };