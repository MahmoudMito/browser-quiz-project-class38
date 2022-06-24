'use strict';
import { STORAGE_KEY } from "../constants.js";
import { quizData } from "../data.js";


export const saveLocalUserData = ()=>{
    
    localStorage.setItem(STORAGE_KEY,JSON.stringify(
        [
        quizData.currentHintIndex,
        quizData.currentQuestionIndex,
        quizData.questions.map(question=>question.selected)
    ]
    ));
}

export const loadLocalUserData = ()=>{
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!savedData){
        return;
    }
    quizData.currentHintIndex = savedData[0];
    quizData.currentQuestionIndex = savedData[1];
    quizData.questions.forEach((question,index)=>{
        question.selected= savedData[2][index];
    });
}


