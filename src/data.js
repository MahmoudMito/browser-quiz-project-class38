'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/
export const resultsOfQuestions = [];
export const theScore = [0];

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'HTML stands for __________',
      answers: {
        a: 'HyperText Markup Language',
        b: 'HyperText Machine Language',
        c: 'HyperText Marking Language',
        d: 'HighText Marking Language',
      },
      correct: 'a',
      selected: null,
      explanation:
        'HTML is the standard markup language mainly used to create web pages. HTML describes the structure and layout of a webpage. HTML consists of a series of elements that helps the browser how to display content easily',

      links: [
        {
          text: 'HTML',
          href: 'https://www.sanfoundry.com/1000-html-questions-answers/',
        },
      ],
    },
    {
      text: 'Which element is used for styling HTML5 layout?',
      answers: {
        a: 'CSS',
        b: 'jQuery',
        c: 'JavaScript',
        d: 'PHP',
      },
      correct: 'a',
      selected: null,
      explanation:
        'For styling HTML5, CSS i.e Cascading Style Sheet is used. It is style sheet language and designed to describe presentation of its content including layouts, colors and fonts. CSS can control the layout of multiple webpages.',

      links: [
        {
          text: 'HTML',
          href: 'https://www.sanfoundry.com/1000-html-questions-answers/',
        },
      ],
    },
    {
      text: 'What is CSS?',
      answers: {
        a: 'CSS is a style sheet language',
        b:
          'CSS is designed to separate the presentation and content, including layout, colors, and fonts',
        c: 'CSS is the language used to style the HTML documents',
        d: 'All of the mentioned',
      },
      correct: 'd',
      selected: null,
      explanation:
        'CSS is a style sheet language that stands for Cascading Style Sheet and is used to style HTML documents. CSS is mainly designed to separate the presentation and content, including layout, colors, and fonts.',

      links: [
        {
          text: 'CSS',
          href: 'https://www.sanfoundry.com/1000-css-questions-answers/',
        },
      ],
    },
    {
      text:
        'Which of the following CSS selectors are used to specify a group of elements?',
      answers: {
        a: 'tag',
        b: 'id',
        c: 'class',
        d: 'both class and tag',
      },
      correct: 'c',
      selected: null,
      explanation:
        'Class selectors are used to specify a group of elements. Id selector specifies a particular unique element.',

      links: [
        {
          text: 'CSS',
          href: 'https://www.sanfoundry.com/1000-css-questions-answers/',
        },
      ],
    },
    {
      text:
        'Which of the following CSS selector is used to specify a rule to bind a particular unique element?',
      answers: {
        a: 'tag',
        b: 'id',
        c: 'class',
        d: 'both class and tag',
      },
      correct: 'b',
      selected: null,
      explanation:
        'For binding a particular unique element, id selectors are used. While for a group of elements, class selector can be used.',

      links: [
        {
          text: 'CSS',
          href: 'https://www.sanfoundry.com/1000-css-questions-answers/',
        },
      ],
    },

    {
      text:
        'Which of the following CSS Property controls how an element is positioned?',
      answers: {
        a: 'static',
        b: 'position',
        c: 'fix',
        d: 'set',
      },
      correct: 'b',
      selected: null,
      explanation:
        'Position property controls how an element is positioned. When set to absolute or fixed, the element is removed completely from the normal flow of the document. When set to relative, the element is moved relative to its position in the normal flow, but a space is left where it would normally have been. The default value, static, means the element remains in the normal flow and is not positioned.',

      links: [
        {
          text: 'CSS',
          href: 'https://www.sanfoundry.com/1000-css-questions-answers/',
        },
      ],
    },

    {
      text: 'Why JavaScript Engine is needed?',
      answers: {
        a: 'Both Compiling & Interpreting the JavaScript',
        b: 'Parsing the javascript',
        c: 'Interpreting the JavaScript',
        d: 'Compiling the JavaScript',
      },
      correct: 'c',
      selected: null,
      explanation:
        'For the most part, the JS Engine is used to interpret JavaScript. It’s used to parse javascript and run it on a web page.',

      links: [
        {
          text: 'Javascript',
          href: 'https://www.sanfoundry.com/1000-javascript-questions-answers/',
        },
      ],
    },

    {
      text:
        'Which of the following can be used to call a JavaScript Code Snippet?',
      answers: {
        a: 'Function/Method',
        b: 'Preprocessor',
        c: 'Triggering Event',
        d: 'RMI',
      },
      correct: 'a',
      selected: null,
      explanation:
        'A function call to the element on which JavaScript is to be run can be used to invoke JavaScript code. Other techniques include onclick, onload, and onsubmit, among others.',

      links: [
        {
          text: 'Javascript',
          href: 'https://www.sanfoundry.com/1000-javascript-questions-answers/',
        },
      ],
    },

    {
      text: 'Why event handlers is needed in JS?',
      answers: {
        a: 'Allows JavaScript code to alter the behaviour of windows',
        b: 'Adds innerHTML page to the code',
        c: 'Change the server location',
        d: 'Performs handling of exceptions and occurrences',
      },
      correct: 'a',
      selected: null,
      explanation:
        'JS code can change the behavior of windows, documents, and the elements that make up those documents via event handlers.',

      links: [
        {
          text: 'Javascript',
          href: 'https://www.sanfoundry.com/1000-javascript-questions-answers/',
        },
      ],
    },
    {
      text: 'Which of the following is not an error in JavaScript?',
      answers: {
        a: 'Missing of Bracket',
        b: 'Division by zero',
        c: 'Syntax error',
        d: 'Missing of semicolons',
      },
      correct: 'b',
      selected: null,
      explanation:
        'In JavaScript, division by zero does not result in an error; it just returns infinity or negative infinity. However, because zero divided by zero has no well-defined value, the result of this operation is the unusual not-a-number value, which is written as NaN.',

      links: [
        {
          text: 'Javascript',
          href: 'https://www.sanfoundry.com/1000-javascript-questions-answers/',
        },
      ],
    },
  ],
};
