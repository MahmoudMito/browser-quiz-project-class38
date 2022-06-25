'use strict';

import { quizData } from "../data.js";
import { setTime } from "../pages/timer.js";
import { initWelcomePage } from "../pages/welcomePage.js";
import { clearLocalUserDataTime, saveLocalUserData } from "./localStorage.js";

/**
 * restart the quiz with resetting data,time, localStorage 
 */
export const restartQuiz = ()=>{
    clearLocalUserDataTime();
    quizData.currentHintIndex =0;
    quizData.currentQuestionIndex=0;
    quizData.questions.forEach(question=>{
        question.selected=null;
    });
    initWelcomePage();
    setTime(false);
}