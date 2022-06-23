'use strict';


import { EXPLANATION_CONTAINER_ID,
    EXPLANATION_TEXT_ID, EXTERNAL_LINKS_ID, POPUP_CLOSE_BUTTON_ID} from "../constants.js";

export const createHintView = (explanationText)=>{
    const element = document.createElement('div');
    element.id = EXPLANATION_CONTAINER_ID;
    element.innerHTML = String.raw `
        <p id=${EXPLANATION_TEXT_ID}>${explanationText}</p>
        <div id=${EXTERNAL_LINKS_ID}></div>
        <button id=${POPUP_CLOSE_BUTTON_ID}>Thanks! 😊</button>

    `;
    
    return element;
}

