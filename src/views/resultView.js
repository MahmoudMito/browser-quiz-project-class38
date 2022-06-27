'use strict';

/**
 * Create a full question element
 * @returns {Element}
 */

export const createPageElement = (quest) => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
      <p>${quest[0]} : ${quest[1]}</p>
    `;
  return element;
};
