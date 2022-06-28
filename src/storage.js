'use strict';

import { quizData } from "./data.js";



export function updateFromStorageData(){

    
   if(sessionStorage.myData){

    const myStorageData = JSON.parse(sessionStorage.getItem('myData'));
    quizData.theScore = myStorageData.theScore;
    quizData.resultsOfQuestions = myStorageData.resultsOfQuestions;
    quizData.currentQuestionIndex = myStorageData.currentQuestionIndex;
    quizData.report = myStorageData.report;
    
   }
    
}

export function refreshStorageData() {

    const {theScore,report,resultsOfQuestions,currentQuestionIndex} = quizData;

    window.sessionStorage.myData = JSON.stringify(
        {theScore,report,resultsOfQuestions,currentQuestionIndex});
}