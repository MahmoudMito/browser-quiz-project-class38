'use strict';

                            <<<<<<< amer-sezgin
                            import { RESULT_BUTTON } from '../constants.js';
                            import { theScore } from '../data.js';
                            import { NUMBER_OF_ANSWERED_QUESTIONS } from '../constants.js';
                            import { quizData } from '../data.js';
                            =======
import { ANSWERS_LIST_ID , EXPLANATION_BUTTON_ID, 
  GIVEUP_QUESTION_BUTTON_ID,QUESTION_CONTAINER_ID,
  NEXT_QUESTION_BUTTON_ID,
  SCORE_ID,
  QUESTION_NAVIGATION_BUTTON_CONTAINER_ID,
  INFO_CONTAINER,
  RESTART_BUTTON_ID,
} from '../constants.js';

// >>>>>>> merge-v2

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question,score,resultButton,time) => {
  const element = document.createElement('div');
  element.id = QUESTION_CONTAINER_ID;
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
//                                   <<<<<<< amer-sezgin

                                    <p>Question number:<span id=${NUMBER_OF_ANSWERED_QUESTIONS}></span></p>

                                    <p id="${SCORE_ID}">Your score is: ${theScore[0]}</p>


//                                   =======
    <div id=${INFO_CONTAINER}>
      <div>
        <p>Score: <span id=${SCORE_ID}>${score}</span></p>
      </div>
      <div>
            ${time.innerHTML}
      </div>
      <button id=${RESTART_BUTTON_ID}>Restart</button>
    </div>
    <h1>${question}</h1>
///// >>>>>>> merge-v2

    <ul id="${ANSWERS_LIST_ID}">
    </ul>
    <div id="${QUESTION_NAVIGATION_BUTTON_CONTAINER_ID}">
      <button id="${GIVEUP_QUESTION_BUTTON_ID}">
        Dunno<br>¯\_(ツ)_/¯
      </button>
      <button id="${EXPLANATION_BUTTON_ID}">
        Hint<br>(¬_¬)
      </button>
      <button id="${NEXT_QUESTION_BUTTON_ID}">
        ${resultButton? 'Result' :'Next' }
      </button>
    </div>
  `;

  return element;
};
