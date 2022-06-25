'use strict';
import { STORAGE_KEY, STORAGE_KEY_TIME } from "../constants.js";
import { quizData } from "../data.js";
import { setUserScore } from "../user/userScore.js";

/**
 * save the data to browser's local storage
 * @param {quizData} data 
 */

export const saveLocalUserData = (data,score)=>{

    localStorage.setItem(STORAGE_KEY,JSON.stringify(
        [
            data.currentHintIndex,
            data.currentQuestionIndex,
            data.questions.map(question=>question.selected),
            score,
        ]));
}

/**
 * load data and score from browser's local storage
 * @param {quizData}
 * @param {Number}
 */
export const loadLocalUserData = (data,score)=>{
    
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!savedData){
        return;
    }
        
    data.currentHintIndex = savedData[0];
    data.currentQuestionIndex = savedData[1] -1;
    data.questions.forEach((question,index)=>{
        question.selected = savedData[2][index];
    });
    score(savedData[3]);
    console.log(`loaded score${savedData[3]}`)
}

/**
 * load user time from the browser
 * @returns {Number}
 */
export const loadLocalUserTime = ()=>{
const savedTime = localStorage.getItem(STORAGE_KEY_TIME);
    if (!savedTime){
        return 0;
    }
    return parseInt(savedTime);
}

/**
 * save user time to the browser
 * @param {Number} seconds 
 */
export const saveLocalUserTime =(seconds)=>{
    localStorage.setItem(STORAGE_KEY_TIME,`${seconds}`);
}

/**
 * clear stored user's data and time from the browser
 */
export const clearLocalUserDataTime = ()=> {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_KEY_TIME);
}