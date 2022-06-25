'use strict';
/**
 * parsing html text to string
 * @param {String} text 
 * @returns 
 */
export const parseHTML = (textHtml)=>{
    return new DOMParser().parseFromString(textHtml,'text/html').documentElement.textContent;
}
