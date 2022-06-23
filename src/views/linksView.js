'use strict';

import { EXTERNAL_LINKS_ID } from "../constants.js";


export const createLinksElement = (links)=>{
    const element = document.createElement('ul');
    element.id = EXTERNAL_LINKS_ID;
    links.forEach(link => {
        const list = document.createElement('li');
        const linkElement = document.createElement('a');
        linkElement.textContent = link.text;
        linkElement.setAttribute('href', link.href);
        linkElement.setAttribute('target','_blank');
        list.appendChild(linkElement);
        element.appendChild(list);
    });
    
    return element;
}

