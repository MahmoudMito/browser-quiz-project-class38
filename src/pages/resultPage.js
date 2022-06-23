'use strict';

import { CORRECT_ANSWER_COLOR_CSS_VAR,
    USER_INTERFACE_ID, 
    WRONG_ANSWER_COLOR_CSS_VAR } from "../constants.js";
import { quizData, userScore } from "../data.js";
import { parseHTML } from "../util/htmlParser.js";
import { createAnswerElement } from "../views/answerView.js";
import { CreateResultPage } from "../views/resultView.js";
import { getTimerElement } from "./timer.js";


export const initResultPage = ()=>{
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';
    const correctAnswerNumber = quizData.questions.filter(answer=>answer.correct===answer.selected).length;
    const resultElement = CreateResultPage(
        userScore(),
        correctAnswerNumber,
        quizData.questions.length-correctAnswerNumber,
        quizData.questions.length,
        getTimerElement()
    );
    
    quizData.questions.forEach(question=>{
        const resultList = document.createElement('ul');
        resultList.textContent = 
        `${question.selected && question.correct === question.selected?
            parseHTML('&#10003; '):parseHTML('&#x2717; ')}${question.text}`;
        for(const [key,value] of Object.entries(question.answers)){
            
            let color = null;
            if (key === question.selected){
                color = question.correct === question.selected ?
                    CORRECT_ANSWER_COLOR_CSS_VAR :
                    WRONG_ANSWER_COLOR_CSS_VAR;
            } else if (key === question.correct && question.correct != question.selected){
                color = CORRECT_ANSWER_COLOR_CSS_VAR;
            }
            
            const answerList = createAnswerElement(key,value,
                color
                );
            resultList.appendChild(answerList);
        };
        resultElement.appendChild(resultList);
    });
    userInterface.appendChild(resultElement);

}