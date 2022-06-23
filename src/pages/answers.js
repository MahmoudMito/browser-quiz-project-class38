'use strict';

import { SCORE_ID } from '../constants.js';
import { quizData, resultsOfQuestions, theScore } from '../data.js';

export const checkAnswer = (selectedAnswerElement, passFunction) => {
  const selectedAnswer =
    quizData.questions[quizData.currentQuestionIndex].selected;
  const theCorrectAnswer =
    quizData.questions[quizData.currentQuestionIndex].correct;

  if (selectedAnswer === null) {
    const theUserAnswer = selectedAnswerElement.innerText.split('')[0];

    quizData.questions[quizData.currentQuestionIndex].selected = theUserAnswer;

    if (theUserAnswer === theCorrectAnswer) {
      resultsOfQuestions[quizData.currentQuestionIndex] = [
        quizData.currentQuestionIndex + 1,
        'correct',
      ];

      const scoreElement = document.getElementById(SCORE_ID);
      theScore[0]++;
      scoreElement.innerHTML = `Your score is: ${theScore}`;
    } else {
      resultsOfQuestions[quizData.currentQuestionIndex] = [
        quizData.currentQuestionIndex + 1,
        'incorrect',
      ];
    }
    passFunction();
    console.log(resultsOfQuestions);
  }
};
