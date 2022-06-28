'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  SCORE_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { resultsOfQuestions } from '../data.js';
import { theScore } from '../data.js';
import { page } from './resultPage.js';

export const initQuestionPage = () => {
  document.getElementsByTagName(
    'title'
  )[0].textContent = `The Frontiers Question-${
    quizData.currentQuestionIndex + 1
  }`;

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

  Array.from(answersListElement.children).forEach((answer) => {
    answer.addEventListener('click', checkAnswer);
  });
  function checkAnswer() {
    const selectedAnswer =
      quizData.questions[quizData.currentQuestionIndex].selected;
    const theCorrectAnswer =
      quizData.questions[quizData.currentQuestionIndex].correct;
    if (selectedAnswer === null) {
      const theUserAnswer = this.innerText.split('')[0];
      quizData.questions[
        quizData.currentQuestionIndex
      ].selected = theUserAnswer;
      if (theUserAnswer === theCorrectAnswer) {
        resultsOfQuestions[quizData.currentQuestionIndex] = [
          quizData.currentQuestionIndex + 1,
          `Given answer is : ${theUserAnswer}' : correct'`,
        ];
        const scoreElement = document.getElementById(SCORE_ID);
        theScore[0]++;
        scoreElement.innerHTML = `Your score is: ${theScore}`;
      } else {
        resultsOfQuestions[quizData.currentQuestionIndex] = [
          quizData.currentQuestionIndex + 1,
          `Given answer is ${theUserAnswer}' : incorrect' : correct answer is ${theCorrectAnswer}`,
        ];
      }
      console.log(resultsOfQuestions);
    }
  }
  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  if (quizData.currentQuestionIndex <= quizData.questions.length - 1) {
    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
    initQuestionPage();
    changeButtonName();
  }
};
const changeButtonName = () => {
  if (quizData.currentQuestionIndex === quizData.questions.length - 1) {
    document.getElementById(NEXT_QUESTION_BUTTON_ID).innerHTML =
      'Show Result Page';
    page();
  }
};
