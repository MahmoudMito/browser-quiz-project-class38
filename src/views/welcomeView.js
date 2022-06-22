'use strict';

import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
//<<<<<<< Sezgin_Branch1
    <h1>Welcome Class 38 Demo Presentation</h1>
//=======
    <h6>The Frontiers' Quiz</h6>
    <br>
//>>>>>>> Merge_Branch
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
    <h6>Class 38</h6>
  `;
  return element;
  /*Demo*/
};
