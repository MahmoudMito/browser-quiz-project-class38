'use strict';

import { userData } from "../data.js";

/**
 * variate the user score
 * @param {boolean} increase 
 * @param {boolean} reset 
 * @returns 
 */
export const userScore = (increase = false,reset = false)=>{
  
    if (increase){
      userData.totalScore++;
    }
    if (reset){
      userData.totalScore =0;
    }
    return userData.totalScore;
}

/**
 * setting user score
 * @param {Number} score 
 * @returns 
 */
export const setUserScore = (score)=>{
  if (!score){
    return;
  }
  userData.totalScore = score;
}

