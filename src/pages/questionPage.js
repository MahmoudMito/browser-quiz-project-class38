'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  SCORE_ID,
  USER_INTERFACE_ID,
  RESULT_BUTTON,
  NUMBER_OF_ANSWERED_QUESTIONS,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { resultsOfQuestions } from '../data.js';
import { theScore } from '../data.js';
import { checkAnswer } from './answers.js';
import { resultButton } from './buttons.js';

export const initQuestionPage = () => {
  resultsOfQuestions.push([quizData.currentQuestionIndex + 1, 'unchecked']);
  console.log(resultsOfQuestions);

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

  // Added:

  Array.from(answersListElement.children).forEach((answer) => {
    answer.addEventListener('click', () => {
      checkAnswer(answer, () => {
        nextQuestion();
      });
    });
  });

  // finished adding.

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  console.log(quizData.currentQuestionIndex);
  if (quizData.currentQuestionIndex >= quizData.questions.length - 1) {
    resultButton();
  } else {
    initQuestionPage();
  }
  document.getElementsByTagName(
    'title'
  )[0].textContent = `The Frontiers Question-${
    quizData.currentQuestionIndex + 1
  }`;
  document.getElementById(NUMBER_OF_ANSWERED_QUESTIONS).textContent =
    quizData.currentQuestionIndex;
};
