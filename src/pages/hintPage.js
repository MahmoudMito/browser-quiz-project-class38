'use strict';

import { EXPLANATION_BUTTON_ID, EXTERNAL_LINKS_ID, POPUP_CLOSE_BUTTON_ID } from "../constants.js";
import { quizData } from "../data.js";
import { createHintView } from "../views/hintView.js";


export const initHintPage = ()=>{
    const hintPageElement = createHintView();
    hintPageElement.style.display = 'none';
    hintPageElement.style.backgroundColor = 
    quizData.questions[quizData.currentQuestionIndex].links.forEach((link,index)=>{
        const list = document.createElement('li');
        const linkElement = document.createElement('link');
        linkElement.setAttribute('href',link);
        list.appendChild(linkElement);
        list.textContent = `Link${index}`;
        hintPageElement.getElementById(EXTERNAL_LINKS_ID).appendChild(list);
    });
    hintPageElement.childNodes[EXPLANATION_BUTTON_ID].addEventListener('click',
    ()=>{
        setHintPage(true);
    });
    hintPageElement.childNodes[POPUP_CLOSE_BUTTON_ID].addEventListener('click',
    ()=>{
        setHintPage(false);
    });
}

const setHintPage = (show)=>{
    show?
    document.getElementById(EXPLANATION_CONTAINER_ID).style.display = 'block':
    document.getElementById(EXPLANATION_CONTAINER_ID).style.display = 'none';

}