'use strict';

export const parseHTML = (text)=>{
    return new DOMParser().parseFromString(text,'text/html').documentElement.textContent;
}
