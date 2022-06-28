import {quizData} from '../data.js'
import {getScore} from '../features/score.js'
import { refreshStorageData } from '../storage.js';

export function checkAnswer(answer){

    // const selectedAnswer = quizData.questions[quizData.currentQuestionIndex].selected ;
    const answerOfCurrentQuestion = quizData.resultsOfQuestions[quizData.currentQuestionIndex][1];
    const theCorrectAnswer = quizData.questions[quizData.currentQuestionIndex].correct;
 
    if ( answerOfCurrentQuestion ==='unchecked'){
 
     const theUserAnswer = answer.innerText.split('')[0];
    //  quizData.questions[quizData.currentQuestionIndex].selected = theUserAnswer;
 
     if ( theUserAnswer === theCorrectAnswer){
       quizData.resultsOfQuestions[quizData.currentQuestionIndex] = 
       [quizData.currentQuestionIndex+1, 'correct'];

       answer.style.backgroundColor = 'green';
       answer.style.color = 'yellow';
 
       getScore();
       refreshStorageData();
 
    } else {
     quizData.resultsOfQuestions[quizData.currentQuestionIndex] = 
     [quizData.currentQuestionIndex+1, 'incorrect'];

     answer.style.backgroundColor = 'red';
     answer.style.color = 'yellow';

     refreshStorageData();
    }

   
 }
 }