'use strict';

import { userData } from "../data.js";

export const userScore = (increase = false,reset = false)=>{
  
    if (increase){
      userData.totalScore++;
    }
    if (reset){
      userData.totalScore =0;
    }
    return userData.totalScore;
}