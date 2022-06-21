'use strict';

import { ANSWERS_LIST_ID , EXPLANATION_BUTTON_ID, 
  GIVEUP_QUESTION_BUTTON_ID,QUESTION_CONTAINER_ID,
  NEXT_QUESTION_BUTTON_ID,
  SCORE_ID,
} from '../constants.js';


/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');
  element.id = QUESTION_CONTAINER_ID;
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <span id=${SCORE_ID}></span>
    <h1>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${GIVEUP_QUESTION_BUTTON_ID}">
      Dunno 😔
    </button>
    <button id="${EXPLANATION_BUTTON_ID}">
      Explanation
    </button>
    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next
    </button>
  `;

  return element;
};
