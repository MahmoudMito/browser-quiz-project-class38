'use strict';

import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.style.marginTop = '200px';
  element.innerHTML = String.raw`
    <h1>WELCOME TO THE TEST.</h1>
    <h2> (HTML & CSS & JavaScript )</h2>
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  `;
  return element;
};
