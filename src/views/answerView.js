'use strict';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText,color=null) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText}
  `;
  if (color){
    element.style.backgroundColor = `var(${color})`;
  }
  return element;
};
