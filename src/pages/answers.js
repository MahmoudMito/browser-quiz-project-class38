import {
    CORRECT_ANSWER_LIST_ANIMATION,
    WRONG_ANSWER_LIST_ANIMATION,
    CORRECT_ANSWER_LIST_INDICATION,
  } from '../constants.js';
import { quizData } from '../data.js';


export const checkCorrectAnswer = (selectedAnswerElement,passFunction)=>{
    if (selectedAnswerElement){
      if (quizData.questions[quizData.currentQuestionIndex].selected ===
      quizData.questions[quizData.currentQuestionIndex].correct){
        selectedAnswerElement.style.animation = CORRECT_ANSWER_LIST_ANIMATION;
      } else {
        selectedAnswerElement.style.animation = WRONG_ANSWER_LIST_ANIMATION;
        indicateCorrectAnswer(selectedAnswerElement);
      }
      selectedAnswerElement.style.animationDuration = '3s';
      selectedAnswerElement.style.animationDirection = 'normal';
      selectedAnswerElement.style.animationIterationCount = '1';
      selectedAnswerElement.style.animationTimingFunction = 'ease-in';
      selectedAnswerElement.addEventListener('animationend',passFunction);
    }
  };

const indicateCorrectAnswer = (selectedAnswerElement)=>{
    for (let answerElement of selectedAnswerElement.parentElement.children){
      if(answerElement.innerText.split(':')[0] === quizData.questions[quizData.currentQuestionIndex].correct){
        answerElement.style.animation = CORRECT_ANSWER_LIST_INDICATION;
        answerElement.style.animationDuration = '3s';
        answerElement.style.animationDirection = 'normal';
        answerElement.style.animationIterationCount = '1';
        answerElement.style.animationTimingFunction = 'ease-in';
        break;
      }
    }
  }

