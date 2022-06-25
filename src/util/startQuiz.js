'use strict';

import { quizData } from "../data.js";
import { initQuestionPage } from "../pages/questionPage.js";
import { setTime } from "../pages/timer.js";
import { setUserScore } from "../user/userScore.js";
import { loadLocalUserData } from "./localStorage.js";

/**
 * start quiz loading user data and score and start timer
 */
export const startQuiz = () => {
    loadLocalUserData(quizData, (score)=>{
      setUserScore(score);
    });
    initQuestionPage();
    setTime(true);
  };
  