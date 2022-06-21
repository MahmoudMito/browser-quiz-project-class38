'use strict';

import {
  ANSWERS_LIST_ID,
  GIVEUP_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  NEXT_QUESTION_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import {checkCorrectAnswer} from '../pages/answers.js';
import {initResultPage} from './resultPage.js';
import {setNextButton} from './button.js';

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

  const questionElement = createQuestionElement(currentQuestion.text);

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
  document
    .getElementById(GIVEUP_QUESTION_BUTTON_ID)
    .addEventListener('click', ()=>{
      nextQuestion();
  });
  setNextButton(false);

};

const nextQuestion = (selectedAnswer = null,selectedAnswerElement = null) => {
  quizData.questions[quizData.currentQuestionIndex].selected = selectedAnswer;
  if (selectedAnswerElement){
    let index =0;
    for(const answer of document.getElementById(ANSWERS_LIST_ID).children){
      answer.removeEventListener('click',answersEventListeners[index],true);
      index++;
    }
  }
  checkCorrectAnswer(selectedAnswerElement,()=>{
    setNextButton(true);
  });
  quizData.currentQuestionIndex += 1;
};


