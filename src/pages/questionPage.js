'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { checkAnswer} from '../features/checkTheAnswer.js';
import { getReport } from '../features/theReport.js';
import { refreshStorageData } from '../storage.js';


export const initQuestionPage = () => {

  questionNumberTitle()

  if (quizData.resultsOfQuestions[quizData.currentQuestionIndex] === undefined){
    quizData.resultsOfQuestions.push([quizData.currentQuestionIndex+1, 'unchecked']);
  }

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

Array.from(answersListElement.children).forEach((answer) => {
  answer.addEventListener('click', () => {
    checkAnswer(answer);
  })
  
});

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};



const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  if (quizData.currentQuestionIndex + 1 < quizData.questions.length){
    initQuestionPage();
  } else if (quizData.currentQuestionIndex + 1 === quizData.questions.length) {
    initQuestionPage();
    resultButton();
  } else if (quizData.currentQuestionIndex + 1 > quizData.questions.length) {
    getReport();
    quizData.report = true;
  }

  refreshStorageData();

};

function resultButton() {
  document.getElementById(NEXT_QUESTION_BUTTON_ID)
    .textContent = 'The result';
}

function questionNumberTitle() {
  document.getElementsByTagName('title')[0].textContent =
  `Question-${quizData.currentQuestionIndex+1}`;
}