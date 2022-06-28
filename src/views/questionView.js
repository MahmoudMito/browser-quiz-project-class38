'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { SCORE_ID } from '../constants.js';
import { NUMBER_OF_ANSWERED_QUESTIONS } from '../constants.js';
import { quizData } from '../data.js';


/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`

  <p id="${NUMBER_OF_ANSWERED_QUESTIONS}">Question number: ${quizData.currentQuestionIndex+1} / ${quizData.questions.length}</p>
  
  <p id="${SCORE_ID}">Your score is: ${quizData.theScore*10} %</p>
  <hr>
  
  <h1>${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>

 `;

  return element;
};
