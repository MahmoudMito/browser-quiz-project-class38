'use strict';

import {
  ANSWERS_LIST_ID,
  GIVEUP_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  NEXT_QUESTION_BUTTON_ID,
  EXPLANATION_BUTTON_ID,
  RESTART_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData, userScore } from '../data.js';
import {checkCorrectAnswer} from '../pages/answers.js';
import {initResultPage} from './resultPage.js';
import {displayButtonElement} from './button.js';
import { getTimerElement, setTime } from './timer.js';
import { initHintPage, setHintPage } from './hintPage.js';
import { saveLocalUserData } from '../util/localStorage.js';
import { restartQuiz } from '../util/quizStatus.js';

let answersEventListeners = [];


export const initQuestionPage = () => {

  answersEventListeners = [];
  if (quizData.currentQuestionIndex> quizData.questions.length -1){
    initResultPage();
    return;
  }

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text,userScore(),
  quizData.currentQuestionIndex === quizData.questions.length -1,
  getTimerElement(),quizData.currentHintIndex +1);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersEventListeners.push(()=>{
      nextQuestion(key, answerElement)
    });
    answerElement.addEventListener('click', answersEventListeners.slice(-1)[0],true);
    answersListElement.appendChild(answerElement);
  }
  
  displayButtonElement(GIVEUP_QUESTION_BUTTON_ID,true,nextQuestion);
  displayButtonElement(NEXT_QUESTION_BUTTON_ID,false,()=>{
    quizData.currentHintIndex = quizData.currentQuestionIndex;
    initQuestionPage();
  });
  setTime(true);
  
  document.getElementById(EXPLANATION_BUTTON_ID).addEventListener('click',
    ()=>{
      initHintPage();
      setHintPage(true);
    });
    document.getElementById(RESTART_BUTTON_ID).addEventListener('click',restartQuiz);
  
    changeTitle();
};

const changeTitle = () => {
  document.getElementsByTagName('title')[0].textContent = 
  `The Frontiers Question-${
    quizData.currentQuestionIndex + 1}`;
}

const nextQuestion = (selectedAnswer = null,selectedAnswerElement = null) => {
  quizData.questions[quizData.currentQuestionIndex].selected = selectedAnswer;
  removeAnswersListeners();
  setTime(false);
  displayButtonElement(GIVEUP_QUESTION_BUTTON_ID,false);

  checkCorrectAnswer(selectedAnswerElement,()=>{
    displayButtonElement(NEXT_QUESTION_BUTTON_ID,true);
    setTime(true);
    saveLocalUserData();
  });
  quizData.currentQuestionIndex += 1;
  quizData.currentHintIndex = quizData.currentQuestionIndex -1;
};

const removeAnswersListeners = ()=>{
  let index =0;
    for(const answer of document.getElementById(ANSWERS_LIST_ID).children){
      answer.removeEventListener('click',answersEventListeners[index],true);
      index++;
    }

};

