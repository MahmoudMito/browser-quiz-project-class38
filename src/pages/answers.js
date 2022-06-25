'use strict';

import {
    CORRECT_ANSWER_LIST_ANIMATION,
    WRONG_ANSWER_LIST_ANIMATION,
    CORRECT_ANSWER_LIST_INDICATION,
    ANSWERS_LIST_ID,
    CORRECT_ANSWER_COLOR_CSS_VAR,
    WRONG_ANSWER_COLOR_CSS_VAR,
    SCORE_ID,
  } from '../constants.js';
import { quizData } from '../data.js';
import { userScore } from '../user/userScore.js';


export const checkCorrectAnswer = (selectedAnswerElement,passFunction)=>{
  if (quizData.questions[quizData.currentQuestionIndex].selected ===
    quizData.questions[quizData.currentQuestionIndex].correct){
      selectedAnswerElement.style.animation = CORRECT_ANSWER_LIST_ANIMATION;
      selectedAnswerElement.style.backgroundColor = `var(${CORRECT_ANSWER_COLOR_CSS_VAR})`;
      document.getElementById(SCORE_ID).textContent = userScore(true);
  } else if(!selectedAnswerElement) {
    indicateCorrectAnswer(null,passFunction);
    return;
  } else {
    selectedAnswerElement.style.animation = WRONG_ANSWER_LIST_ANIMATION;
    selectedAnswerElement.style.backgroundColor = `var(${WRONG_ANSWER_COLOR_CSS_VAR})`;
    indicateCorrectAnswer(selectedAnswerElement);
  }
    setElementAnimationProperties(selectedAnswerElement);
    selectedAnswerElement.addEventListener('animationend',passFunction);
};

const indicateCorrectAnswer = (selectedAnswerElement = null,passFunction = null)=>{
    for (const answerElement of selectedAnswerElement? 
      selectedAnswerElement.parentElement.children :
      document.getElementById(ANSWERS_LIST_ID).children){
      if(answerElement.innerText.split(':')[0] === quizData.questions[quizData.currentQuestionIndex].correct){
        answerElement.style.animation = CORRECT_ANSWER_LIST_INDICATION;
        setElementAnimationProperties(answerElement);
        answerElement.style.backgroundColor = `var(${CORRECT_ANSWER_COLOR_CSS_VAR})`;
        if(passFunction){
          answerElement.addEventListener('animationend', passFunction);
        }
        break;
      }
    }
  }

const setElementAnimationProperties = (element)=>{
  element.style.animationDuration = '3s';
  element.style.animationDirection = 'normal';
  element.style.animationIterationCount = '1';
  element.style.animationTimingFunction = 'ease-in';
}
