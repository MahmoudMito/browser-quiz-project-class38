'use strict';

import { BUTTON_BORDER_SIZE_CSS_VAR, USER_INTERFACE_ID } from '../constants.js';
import { quizData, userScore } from '../data.js';
import { CreateResultPage } from '../views/resultPageView.js';
import { getTimerElement } from './timer.js';

export const initResultPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  const resultElement = CreateResultPage();
  const selectedAnswers = quizData.questions.filter(
    (answer) => !answer && answer.selected === answer.correct
  );

  userInterface.appendChild(resultElement);
};
