'use strict';

import { ANSWERS_LIST_ID , EXPLANATION_BUTTON_ID, 
  GIVEUP_QUESTION_BUTTON_ID,QUESTION_CONTAINER_ID,
  NEXT_QUESTION_BUTTON_ID,
  SCORE_ID,
  QUESTION_NAVIGATION_BUTTON_CONTAINER_ID,
  INFO_CONTAINER,
  RESTART_BUTTON_ID,
} from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question,score,resultButton,time,answeredQuestions) => {
  const element = document.createElement('div');
  element.id = QUESTION_CONTAINER_ID;
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <div id=${INFO_CONTAINER}>
      <div>
        <p>Question number: ${answeredQuestions}></p>
        <p>Your score is: <span id=${SCORE_ID}>${score}</span></p>
      </div>
      <div>
            ${time.innerHTML}
      </div>
      <button id=${RESTART_BUTTON_ID}>Restart</button>
    </div>
    <h1>${question}</h1>
    <ul id="${ANSWERS_LIST_ID}">
    </ul>
    <div id="${QUESTION_NAVIGATION_BUTTON_CONTAINER_ID}">
      <button id="${GIVEUP_QUESTION_BUTTON_ID}">
        Dunno<br>¯\_(ツ)_/¯
      </button>
      <button id="${EXPLANATION_BUTTON_ID}">
        Hint<br>(¬_¬)
      </button>
      <button id="${NEXT_QUESTION_BUTTON_ID}">
        ${resultButton? 'Result' :'Next' }
      </button>
    </div>
  `;

  return element;
};
