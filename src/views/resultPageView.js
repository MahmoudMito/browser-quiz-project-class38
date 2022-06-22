import {
  RESULT_CONTAINER_ID,
  SCORE_ID,
  SCROLLABLE_CLASS,
  TIMER_ID,
} from '../constants.js';
import { quizData, userScore } from '../data.js';

/**
 * Create results page
 * @returns {Element}
 */
export const CreateResultPage = () => {
  const element = document.createElement('div');
  element.id = RESULT_CONTAINER_ID;
  // element.className = SCROLLABLE_CLASS;
  element.innerHTML = String.raw`
    <p>Your score's <span id=${SCORE_ID}></span></p>
    <p>Quiz time <span id=${TIMER_ID}></span></p>
    
    `;

  return element;
};
