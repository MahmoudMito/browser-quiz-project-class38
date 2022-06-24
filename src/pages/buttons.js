'use strict';

import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';

export const resultButton = () => {
  document.getElementById(NEXT_QUESTION_BUTTON_ID).textContent = 'Show Result';
};
