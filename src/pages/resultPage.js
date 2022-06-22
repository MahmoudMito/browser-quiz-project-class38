'use strict';

import { BUTTON_BORDER_SIZE_CSS_VAR, USER_INTERFACE_ID } from "../constants.js";
import { quizData, userScore } from "../data.js";
import { CreateResultPage } from "../views/resultPageView.js";


export const initResultPage = ()=>{
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';
    const resultElement = CreateResultPage();
    
    quizData.questions.forEach(question=>{
        const resultList = document.createElement('ul');
        resultList.textContent = 
        `${question.selected && question.correct === question.selected?
                '✅ ':'❌ '}${question.text}`;
        for(const [key,value] of Object.entries(question.answers)){
            const answerList = document.createElement('li');
            answerList.textContent = `${key}: ${value}`;
            answerList.style.backgroundColor = 
                key === question.correct?
                'green':'red';
                resultList.appendChild(answerList);
            answerList.style.border = `var(${BUTTON_BORDER_SIZE_CSS_VAR})`;
        };
        resultElement.appendChild(resultList);
    });
    userInterface.appendChild(resultElement);

}