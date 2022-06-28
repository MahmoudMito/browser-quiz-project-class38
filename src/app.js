'use strict';

import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { updateFromStorageData } from './storage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();
  updateFromStorageData();
};

window.addEventListener('load', loadApp);
