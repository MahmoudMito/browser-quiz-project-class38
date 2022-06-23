'use strict';

import { EXTERNAL_LINKS_ID, POPUP_CLOSE_BUTTON_ID, POPUP_CONTAINER_ID } from "../constants.js";
import { quizData } from "../data.js";
import { createHintView } from "../views/hintView.js";
import { createLinksElement } from "../views/linksView.js";

let cancelButtonEventListener = null;

export const initHintPage = (questionIndex=null)=>{
    
    const popupContainer = document.getElementById(POPUP_CONTAINER_ID);
    popupContainer.innerHTML = '';
    popupContainer.style.display = 'none';

    const hintPageElement = createHintView(
        quizData.questions[questionIndex? questionIndex : quizData.currentHintIndex].explanation);

    popupContainer.appendChild(hintPageElement);

    const linksElement = createLinksElement(
        quizData.questions[questionIndex? questionIndex : quizData.currentHintIndex].links);
    
    document.getElementById(EXTERNAL_LINKS_ID).appendChild(linksElement);
    refreshEventListener();

}

export const setHintPage = (show)=>{
    show?
    document.getElementById(POPUP_CONTAINER_ID).style.display = 'block':
    document.getElementById(POPUP_CONTAINER_ID).style.display = 'none';

}


const refreshEventListener = ()=>{
    if (cancelButtonEventListener) {
        document.getElementById(POPUP_CLOSE_BUTTON_ID).removeEventListener('click',
        cancelButtonEventListener,true);
        cancelButtonEventListener = null;
    }
    cancelButtonEventListener = ()=> {
        setHintPage(false);
    }
    document.getElementById(POPUP_CLOSE_BUTTON_ID).addEventListener('click',
    cancelButtonEventListener,true);
}