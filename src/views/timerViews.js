'use strict';

export const createTimerElement = ()=>{
  
  let element = document.createElement('label');
  element.textContent = 'Time: '

  let seconds = document.createElement('span');
  seconds.textContent = '00';
  element.appendChild(seconds);

  let punctuationMark = document.createElement('span');
  punctuationMark.textContent = ':';
  element.appendChild(punctuationMark);

  let minutes = document.createElement('span');
  minutes.textContent = '00';
  element.appendChild(minutes);

  return element;

}