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

export const initQuestionPage = () => {
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
    answerElement.addEventListener('click', ()=>{
      nextQuestion(key, answerElement)
    });
    answersListElement.appendChild(answerElement);
  }
  document
    .getElementById(GIVEUP_QUESTION_BUTTON_ID)
    .addEventListener('click', ()=>{
      nextQuestion();
  });
  setNextButton(false);

  document.getElementsByTagName('title')[0].textContent = 
  `The Frontiers Q${quizData.currentQuestionIndex+1}`;


};

const nextQuestion = (selectedAnswer = null,selectedAnswerElement = null) => {
  quizData.questions[quizData.currentQuestionIndex].selected = selectedAnswer;
  checkCorrectAnswer(selectedAnswerElement,()=>{
    setNextButton(true);
  });
  quizData.currentQuestionIndex += 1;
};


