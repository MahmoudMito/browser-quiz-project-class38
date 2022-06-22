'use strict';

// <<<<<<< Amer&Sezgin_Branch
// import { ANSWERS_LIST_ID } from '../constants.js';
// import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
// import { theScore } from '../data.js';
// import { SCORE_ID } from '../constants.js';
// import { NUMBER_OF_ANSWERED_QUESTIONS } from '../constants.js';
// import { quizData } from '../data.js';

// =======
// <<<<<<< Sezgin_Branch1
// import { ANSWERS_LIST_ID } from '../constants.js';
// import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
// import { theScore } from '../data.js';
// import { SCORE_ID } from '../constants.js';
import { NUMBER_OF_ANSWERED_QUESTIONS } from '../constants.js';
// import { quizData } from '../data.js';
// import { SHOW_REPORT } from '../constants.js';
// =======
import { ANSWERS_LIST_ID , EXPLANATION_BUTTON_ID, 
  GIVEUP_QUESTION_BUTTON_ID,QUESTION_CONTAINER_ID,
  NEXT_QUESTION_BUTTON_ID,
  SCORE_ID,
  QUESTION_NAVIGATION_BUTTON_CONTAINER_ID,
  INFO_CONTAINER,
  TIMER_ID,
} from '../constants.js';

// >>>>>>> Merge_Branch
// >>>>>>> Merge_Branch

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question,score) => {
  const element = document.createElement('div');
  element.id = QUESTION_CONTAINER_ID;
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
//<<<<<<< Amer&Sezgin_Branch

 // <p id="${NUMBER_OF_ANSWERED_QUESTIONS}">Question number: ${quizData.currentQuestionIndex+1} / ${quizData.questions.length}</p>
  
//  <p id="${SCORE_ID}">Your score is: ${theScore[0]}</p>
  
//  <h1>${question}</h1>
//=======
//<<<<<<< Sezgin_Branch1

  <p id="${NUMBER_OF_ANSWERED_QUESTIONS}">Question number: ${quizData.currentQuestionIndex+1} / ${quizData.questions.length}</p>
  
//   <p id="${SCORE_ID}">Your score is: ${theScore[0]}</p>
  
//   <h1>${question}</h1>

//     <ul id="${ANSWERS_LIST_ID}">
//     </ul>

//     <button id="${NEXT_QUESTION_BUTTON_ID}">
//       Next question
//     </button>

//     <button id="${SHOW_REPORT}">
//     Show Result Report
//     </button>
//   `
//   ;
// =======
    <div id=${INFO_CONTAINER}>
      <div>
        <p>Score: <span id=${SCORE_ID}>${score}</span></p>
      </div>
    </div>
    <h1>${question}</h1>
//>>>>>>> Merge_Branch

    <ul id="${ANSWERS_LIST_ID}">
    </ul>
    <div id="${QUESTION_NAVIGATION_BUTTON_CONTAINER_ID}">
      <button id="${GIVEUP_QUESTION_BUTTON_ID}">
        Dunno 😔
      </button>
      <button id="${EXPLANATION_BUTTON_ID}">
        Explanation
      </button>
      <button id="${NEXT_QUESTION_BUTTON_ID}">
        Next
      </button>
    </div>
  `;
///>>>>>>> Merge_Branch

  return element;
};
