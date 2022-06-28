'use strict';

import { quizData } from "../data.js";
import { USER_INTERFACE_ID } from "../constants.js";
import { RESTART_ID } from "../constants.js";
import { initWelcomePage } from "../pages/welcomePage.js";

export function getReport(){

    const questionResult = {
        correct : 0,
        incorrect : 0,
        unchecked : 0,
    }

    quizData.resultsOfQuestions.forEach(result => {
        if (result[1] === 'correct'){
            questionResult.correct++;
        } else if (result[1] === 'incorrect'){
            questionResult.incorrect++;
        } else if (result[1] === 'unchecked'){
            questionResult.unchecked++;
        }
    })

    const element = document.getElementById(USER_INTERFACE_ID);
    element.innerHTML = '';

    const reportPage = document.createElement('div');
    reportPage.innerHTML = String.raw`

    <h1> YOUR FINAL REPORT</h1>
    <br>
    <h2> Your score is : ${quizData.theScore*10} % </h2>
    <br>
    <h2> Correct questions : ${questionResult.correct} </h2>
    <h2> Incorrect questions : ${questionResult.incorrect} </h2>
    <h2> Unchecked questions : ${questionResult.unchecked} </h2>
    <br>
    <button id='${RESTART_ID}'>Restart</button>

    `;

    reportPage.style.border = '2px solid black';
    reportPage.style.padding = '30px';

    element.appendChild(reportPage);


    // Adding restart function:
    const restartButton = document.getElementById(RESTART_ID);

    restartButton.addEventListener('click', function () {

    quizData.currentQuestionIndex = 0;
    quizData.theScore = 0; 
    quizData.resultsOfQuestions = [];
    quizData.report = false;
    window.sessionStorage.clear();
    initWelcomePage();
})

}


