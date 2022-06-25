'use strict';

import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID} from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import {setButtonActive} from './button.js';
import { setTime } from './timer.js';
import { setHintPage } from './hintPage.js';
import { loadLocalUserData } from '../util/localStorage.js';
import { quizData } from '../data.js';
import { setUserScore } from '../user/userScore.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  setHintPage(false);

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);
  

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', ()=>{
      // setButtonActive(START_QUIZ_BUTTON_ID,startQuiz);
      startQuiz();
    });
};

const startQuiz = () => {
  loadLocalUserData(quizData, (score)=>{
    setUserScore(score);
    console.log(score);
  });
  
  initQuestionPage();
  setTime(true);
};
