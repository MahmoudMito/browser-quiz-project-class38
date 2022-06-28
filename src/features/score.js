'use strict';
import { quizData } from "../data.js";
import { SCORE_ID } from "../constants.js";


export const getScore = () => {

    const scoreElement = document.getElementById(SCORE_ID);
    quizData.theScore++;
    scoreElement.innerHTML = `Your score is: ${quizData.theScore*10} %`;

}