'use strict';

import { userData } from "../data.js";

/**
 * variate the user score
 * @param {boolean} increase 
 * @param {boolean} reset 
 * @returns 
 */
export const userScore = (increase = false)=>{
    if (increase){
      userData.totalScore++;
    }
    return userData.totalScore;
}

/**
 * setting user score
 * @param {Number} score 
 * @returns 
 */
export const setUserScore = (score)=>{
  userData.totalScore = score;
}

