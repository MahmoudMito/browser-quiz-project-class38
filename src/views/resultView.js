'use strict';

import { INFO_CONTAINER, 
    RESTART_BUTTON_ID, 
    RESULT_CONTAINER_ID ,
    SCROLLABLE_CLASS} from "../constants.js";
import { parseHTML } from "../util/htmlParser.js";

/**
 * Create results page
 * @returns {Element}
 */
export const CreateResultPage = (
    score,
    correctAnswerNumber,
    wrongAnswerNumber,
    totalQuestion,
    time)=>{
        
    const element = document.createElement('div');
    element.id = RESULT_CONTAINER_ID;
    element.innerHTML = String.raw`
    <div id=${INFO_CONTAINER} class=${SCROLLABLE_CLASS}>
        <div>
            <p>Score: ${score}</p>
        </div>
        <div>
            <p>${parseHTML('&#10003;')} Answers: ${correctAnswerNumber}</p>
        </div>
        <div>
            <p>${parseHTML('&#x2717;')} Answers: ${wrongAnswerNumber}</p>
        </div>
        <div>
            <p>Questions: ${totalQuestion}</p>
        </div>
        <div>
            ${time.innerHTML}
        </div>
        <button id=${RESTART_BUTTON_ID}>Restart</button>
    </div>
    `;

    return element;
}
