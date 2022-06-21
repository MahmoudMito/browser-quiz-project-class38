import {
    CORRECT_ANSWER_LIST_ANIMATION,
    WRONG_ANSWER_LIST_ANIMATION,
    CORRECT_ANSWER_LIST_INDICATION,
    ANSWERS_LIST_ID,
    CORRECT_ANSWER_COLOR_CSS_VAR,
    WRONG_ANSWER_COLOR_CSS_VAR,
  } from '../constants.js';
import { quizData } from '../data.js';


export const checkCorrectAnswer = (selectedAnswerElement,passFunction)=>{
  if (quizData.questions[quizData.currentQuestionIndex].selected ===
    quizData.questions[quizData.currentQuestionIndex].correct){
      selectedAnswerElement.style.animation = CORRECT_ANSWER_LIST_ANIMATION;
      selectedAnswerElement.style.backgroundColor = `var(${CORRECT_ANSWER_COLOR_CSS_VAR})`;
  } else if(!selectedAnswerElement) {
    indicateCorrectAnswer(null,passFunction);
    return;
  } else {
    selectedAnswerElement.style.animation = WRONG_ANSWER_LIST_ANIMATION;
    selectedAnswerElement.style.backgroundColor = `var(${WRONG_ANSWER_COLOR_CSS_VAR})`;
    indicateCorrectAnswer(selectedAnswerElement);
  }
    selectedAnswerElement.style.animationDuration = '3s';
    selectedAnswerElement.style.animationDirection = 'normal';
    selectedAnswerElement.style.animationIterationCount = '1';
    selectedAnswerElement.style.animationTimingFunction = 'ease-in';
    selectedAnswerElement.addEventListener('animationend',passFunction);
};

const indicateCorrectAnswer = (selectedAnswerElement = null,passFunction = null)=>{
    for (let answerElement of selectedAnswerElement? 
      selectedAnswerElement.parentElement.children :
      document.getElementById(ANSWERS_LIST_ID).children){
      if(answerElement.innerText.split(':')[0] === quizData.questions[quizData.currentQuestionIndex].correct){
        answerElement.style.animation = CORRECT_ANSWER_LIST_INDICATION;
        answerElement.style.animationDuration = '3s';
        answerElement.style.animationDirection = 'normal';
        answerElement.style.animationIterationCount = '1';
        answerElement.style.animationTimingFunction = 'ease-in';
        answerElement.style.backgroundColor = `var(${CORRECT_ANSWER_COLOR_CSS_VAR})`;
        if(passFunction){
          answerElement.addEventListener('animationend', passFunction);
        }
        break;
      }
    }
  }

