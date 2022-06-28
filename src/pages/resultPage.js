'use strict';
//import { quizData } from '../data.js';
import { resultsOfQuestions } from '../data.js';
import { USER_INTERFACE_ID } from '../constants.js';
import { createPageElement } from '../views/resultView.js';
import { createPageHeader } from '../views/resultView.js';

export const page = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  const resultPageHeader = createPageHeader();
  userInterface.appendChild(resultPageHeader);
  resultsOfQuestions.forEach((result) => {
    const welcomeElement = createPageElement(result);
    userInterface.appendChild(welcomeElement);
  });
};
