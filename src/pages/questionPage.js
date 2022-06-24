'use strict';

import {
  ANSWERS_LIST_ID,
                          /////<<<<<<< amer-sezgin
                            SCORE_ID,
                            RESULT_BUTTON,
                            NUMBER_OF_ANSWERED_QUESTIONS,
                          } from '../constants.js';
                          import { resultsOfQuestions } from '../data.js';
                          import { checkAnswer } from './answers.js';
                          // import { resultButton } from './buttons.js';

                          export const initQuestionPage = () => {
                            resultsOfQuestions.push([quizData.currentQuestionIndex + 1, 'unchecked']);
                            console.log(resultsOfQuestions);

                          /////=======
  GIVEUP_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  NEXT_QUESTION_BUTTON_ID,
  INFO_CONTAINER,
  EXPLANATION_BUTTON_ID,
  RESTART_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData, userScore } from '../data.js';
import {checkCorrectAnswer} from '../pages/answers.js';
import {initResultPage} from './resultPage.js';
import {displayButtonElement} from './button.js';
import { getTimerElement, setTime } from './timer.js';
import { initHintPage, setHintPage } from './hintPage.js';
import { saveLocalUserData } from '../util/localStorage.js';
import { restartQuiz } from '../util/quizStatus.js';

let answersEventListeners = [];


export const initQuestionPage = () => {
  answersEventListeners = [];
  if (quizData.currentQuestionIndex> quizData.questions.length -1){
    initResultPage();
    return;
  }
///// >>>>>>> merge-v2
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text,userScore(),
  quizData.currentQuestionIndex === quizData.questions.length -1,
  getTimerElement());

  userInterface.appendChild(questionElement);
  // questionElement.children[INFO_CONTAINER].
  // appendChild(document.createElement('div').appendChild(getTimerElement()));

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
  displayButtonElement(NEXT_QUESTION_BUTTON_ID,false,()=>{
    quizData.currentHintIndex = quizData.currentQuestionIndex;
    initQuestionPage();
  });
  setTime(true);
  
  
  document.getElementById(EXPLANATION_BUTTON_ID).addEventListener('click',
    ()=>{
      initHintPage();
      setHintPage(true);
    });
    document.getElementById(RESTART_BUTTON_ID).addEventListener('click',restartQuiz);
};


////////<<<<<<< amer-sezgin
                      // Added:
                      changeTitleAndQuestionNumber();
                      Array.from(answersListElement.children).forEach((answer) => {
                        answer.addEventListener('click', () => {
                          checkAnswer(answer, () => {
                            document
                              .getElementById(NEXT_QUESTION_BUTTON_ID)
                              .addEventListener('click', nextQuestion);
                          });
                        });
                      });

                      // finished adding.
                    };

                    const nextQuestion = () => {
                      quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
                      console.log(quizData.currentQuestionIndex);
                      if (quizData.currentQuestionIndex >= quizData.questions.length - 1) {
                        resultButton();
                        console.log('no more');
                      } else {
                        initQuestionPage();
                      }
                      changeTitleAndQuestionNumber();
                    };

                    const changeTitleAndQuestionNumber = () => {
                      document.getElementById(NUMBER_OF_ANSWERED_QUESTIONS).textContent =
                        quizData.currentQuestionIndex + 1;
                      document.getElementsByTagName(
                        'title'
                      )[0].textContent = `The Frontiers Question-${
                        quizData.currentQuestionIndex + 1
                      }`;
                    ////////=======
const nextQuestion = (selectedAnswer = null,selectedAnswerElement = null) => {
  quizData.questions[quizData.currentQuestionIndex].selected = selectedAnswer;
  removeAnswersListeners();
  setTime(false);
  displayButtonElement(GIVEUP_QUESTION_BUTTON_ID,false);

  checkCorrectAnswer(selectedAnswerElement,()=>{
    displayButtonElement(NEXT_QUESTION_BUTTON_ID,true);
    setTime(true);
    saveLocalUserData();
  });
  quizData.currentQuestionIndex += 1;
  quizData.currentHintIndex = quizData.currentQuestionIndex -1;
};

const removeAnswersListeners = ()=>{
  let index =0;
    for(const answer of document.getElementById(ANSWERS_LIST_ID).children){
      answer.removeEventListener('click',answersEventListeners[index],true);
      index++;
    }

//////>>>>>>> merge-v2
};

