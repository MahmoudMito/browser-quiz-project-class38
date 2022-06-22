'use strict';

import {
  ANSWERS_LIST_ID,
  GIVEUP_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  NEXT_QUESTION_BUTTON_ID,
  SCORE_Id,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';


import { timer } from '../views/timerViews.js';

import { quizData, userScore } from '../data.js';
import {checkCorrectAnswer} from '../pages/answers.js';
import {initResultPage} from './resultPage.js';
import {displayButtonElement} from './button.js';

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

  const questionElement = createQuestionElement(currentQuestion.text,userScore());

  userInterface.appendChild(questionElement);
  userInterface.appendChild(timer);


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
  displayButtonElement(NEXT_QUESTION_BUTTON_ID,false,initQuestionPage);

};


const nextQuestion = (selectedAnswer = null,selectedAnswerElement = null) => {
  quizData.questions[quizData.currentQuestionIndex].selected = selectedAnswer;
  removeAnswersListeners();

  displayButtonElement(GIVEUP_QUESTION_BUTTON_ID,false);
  checkCorrectAnswer(selectedAnswerElement,()=>{
    displayButtonElement(NEXT_QUESTION_BUTTON_ID,true);
  });
  quizData.currentQuestionIndex += 1;

  initQuestionPage();

};

const removeAnswersListeners = ()=>{
  let index =0;
    for(const answer of document.getElementById(ANSWERS_LIST_ID).children){
      answer.removeEventListener('click',answersEventListeners[index],true);
      index++;
    }

};

