'use strict';
import { ANSWERS_LIST_ID , EXPLANATION_BUTTON_ID, 
  GIVEUP_QUESTION_BUTTON_ID,QUESTION_CONTAINER_ID,
  NEXT_QUESTION_BUTTON_ID,
  SCORE_ID,
  QUESTION_NAVIGATION_BUTTON_CONTAINER_ID,
  INFO_CONTAINER,
} from '../constants.js';
/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question,score) => {
  const element = document.createElement('div');
  element.id = QUESTION_CONTAINER_ID;
  
  element.innerHTML = String.raw`

    <div id=${INFO_CONTAINER}>
      <div>
        <p>Score: <span id=${SCORE_ID}>${score}</span></p>
      </div>
    </div>
    <h1>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>
    <div id="${QUESTION_NAVIGATION_BUTTON_CONTAINER_ID}">
      <button id="${GIVEUP_QUESTION_BUTTON_ID}">
        Dunno 😔
      </button>
      <button id="${EXPLANATION_BUTTON_ID}">
        Explanation
      </button>
      <button id="${NEXT_QUESTION_BUTTON_ID}">
        Next
      </button>
    </div>
  `;

  return element;
};
