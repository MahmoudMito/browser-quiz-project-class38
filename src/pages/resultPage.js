'use strict';

import { USER_INTERFACE_ID } from "../constants.js";
import { quizData, userScore } from "../data.js";
import { CreateResultPage } from "../views/resultPageView.js";


export const initResultPage = ()=>{
    const userInterface = document.getElementById(USER_INTERFACE_ID)
    userInterface.innerHTML = '';
    const resultElement = CreateResultPage();
    
    quizData.questions.forEach(question=>{
        resultElement.getElementsByTagName('ul').textContent = 
        String.raw`
            ${question.selected && question.correct === question.selected?
                '✅ ':'❌ '} 
            ${question.text}
        `;
        for(const [key,value] of Object.entries(question.answers)){
            const answerList = document.createElement('li');
            answerList.textContent = `${key}: ${value}`;
            answerList.style.backgroundColor = 
                question.selected && question.correct === question.selected?
                'green':'red';

        };
    });


}