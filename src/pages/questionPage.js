'use strict';

import {
  ANSWERS_LIST_ID,
// <<<<<<< Sezgin_Branch1
//   NEXT_QUESTION_BUTTON_ID,
//   SCORE_ID,
// =======
  GIVEUP_QUESTION_BUTTON_ID,
// >>>>>>> Merge_Branch
  USER_INTERFACE_ID,
  NEXT_QUESTION_BUTTON_ID,
  INFO_CONTAINER,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
// <<<<<<< Sezgin_Branch1
// import { quizData } from '../data.js';
// import { resultsOfQuestions } from '../data.js';
// import { theScore } from '../data.js';
// import {SHOW_REPORT} from '../constants.js';
// export const initQuestionPage = () => {
  
//   resultsOfQuestions.push([quizData.currentQuestionIndex+1, 'unchecked']);
//   console.log(resultsOfQuestions);

// =======
import { quizData, userScore } from '../data.js';
import {checkCorrectAnswer} from '../pages/answers.js';
import {initResultPage} from './resultPage.js';
import {displayButtonElement} from './button.js';
import { getTimerElement, setTime } from './timer.js';

let answersEventListeners = [];


export const initQuestionPage = () => {
  answersEventListeners = [];
  if (quizData.currentQuestionIndex> quizData.questions.length -1){
    initResultPage();
    return;
  }
// >>>>>>> Merge_Branch
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text,userScore());

  userInterface.appendChild(questionElement);
  questionElement.children[INFO_CONTAINER].
  appendChild(document.createElement('div').appendChild(getTimerElement()));

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
  setTime(true);
};


const nextQuestion = (selectedAnswer = null,selectedAnswerElement = null) => {
  quizData.questions[quizData.currentQuestionIndex].selected = selectedAnswer;
  removeAnswersListeners();
  setTime(false);
  displayButtonElement(GIVEUP_QUESTION_BUTTON_ID,false);
  checkCorrectAnswer(selectedAnswerElement,()=>{
    displayButtonElement(NEXT_QUESTION_BUTTON_ID,true);
    setTime(true);
  });
  quizData.currentQuestionIndex += 1;

// <<<<<<< Sezgin_Branch1
// // Amer-Sezgin Added:

// Array.from(answersListElement.children).forEach((answer) => {
//   answer.addEventListener('click', checkAnswer)
  
// });

// function checkAnswer(){

//    const selectedAnswer = quizData.questions[quizData.currentQuestionIndex].selected ;
//    const theCorrectAnswer = quizData.questions[quizData.currentQuestionIndex].correct;

//    if ( selectedAnswer === null){

//     const theUserAnswer = this.innerText.split('')[0];
//     quizData.questions[quizData.currentQuestionIndex].selected = theUserAnswer;

//     if ( theUserAnswer === theCorrectAnswer){
//       resultsOfQuestions[quizData.currentQuestionIndex] = [quizData.currentQuestionIndex+1, 'correct'];

//       const scoreElement = document.getElementById(SCORE_ID);
//       theScore[0]++;
//       scoreElement.innerHTML = `Your score is: ${theScore}`;

//    } else {
//     resultsOfQuestions[quizData.currentQuestionIndex] = [quizData.currentQuestionIndex+1, 'incorrect'];
//   }

//    console.log(resultsOfQuestions);
// }
// }


// // Amer-Sezgin finished adding.

//   document
//     .getElementById(NEXT_QUESTION_BUTTON_ID)
//     .addEventListener('click', nextQuestion);
//     const resultButton = document.getElementById(SHOW_REPORT);
//     const questionNextButton=document.getElementById(NEXT_QUESTION_BUTTON_ID);
    
//     if(quizData.currentQuestionIndex+1<quizData.questions.length){
//      resultButton.style.display='none';
  
//     }else{
//       questionNextButton.style.display='none';
//       resultButton.style.display='inline-block';
//     };

// =======
// >>>>>>> Merge_Branch
};

const removeAnswersListeners = ()=>{
  let index =0;
    for(const answer of document.getElementById(ANSWERS_LIST_ID).children){
      answer.removeEventListener('click',answersEventListeners[index],true);
      index++;
    }

// <<<<<<< Sezgin_Branch1
//   initQuestionPage();

  document.getElementsByTagName('title')[0].textContent =
  `The Frontiers Question-${quizData.currentQuestionIndex+1}`;
// =======
// >>>>>>> Merge_Branch
};

