'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  theScore : 0,
  report : false,
  resultsOfQuestions : [],
  currentQuestionIndex: 0,
  
  // the questions in the quiz
  questions: [
    {
      text: 'Who is the father of HTML?',
      answers: {
        a: 'Rasmus Lerdorf',
        b: 'Tim Berners-Lee',
        c: 'Brendan Eich',
        d: 'Sergey Brin',
      },
      correct: 'b',
      selected: null,
      explanation:'Timothy John Berners-Lee (TimBL) is known as the father of HTML. He is a British computer scientist, best known as the inventor of the World Wide Web.',
    
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
      explanation:'For styling HTML5, CSS i.e Cascading Style Sheet is used. It is style sheet language and designed to describe presentation of its content including layouts, colors and fonts. CSS can control the layout of multiple webpages.',
    
      links: [
        {
          text: 'HTML',
          href: 'https://www.sanfoundry.com/1000-html-questions-answers/',
        },
      ],
    },
    {
      text: 'Which of the following HTML tag is used to create an unordered list?',
      answers: {
        a: '&ltol&gt',
        b: '&ltul&gt',
        c: '&ltli&gt',
        d: '&ltll&gt',
      },
      correct: 'b',
      selected: null,
      explanation:'&ltul&gt tag is used to create the unordered list items in an HTML document. By default, unordered list items will display in a bulleted format.',
    
      links: [
        {
          text: 'HTML',
          href: 'https://www.sanfoundry.com/1000-html-questions-answers/',
        },
      ],
    },
    {
      text: 'Which of the following CSS selectors are used to specify a group of elements?',
      answers: {
        a: 'tag',
        b: 'id',
        c: 'class',
        d: 'both class and tag',
      },
      correct: 'c',
      selected: null,
      explanation:'Class selectors are used to specify a group of elements. Id selector specifies a particular unique element.',
    
      links: [
        {
          text: 'CSS',
          href: 'https://www.sanfoundry.com/1000-css-questions-answers/',
        },
      ],
    },
   
   
   
    {
      text: 'Which of the following CSS Property controls how an element is positioned?',
      answers: {
        a: 'static',
        b: 'position',
        c: 'fix',
        d: 'set',
      },
      correct: 'b',
      selected: null,
      explanation:'Position property controls how an element is positioned. When set to absolute or fixed, the element is removed completely from the normal flow of the document. When set to relative, the element is moved relative to its position in the normal flow, but a space is left where it would normally have been. The default value, static, means the element remains in the normal flow and is not positioned.',
    
      links: [
        {
          text: 'CSS',
          href: 'https://www.sanfoundry.com/1000-css-questions-answers/',
        },
      ],
    },
   
    {
      text: 'Among the given statements, which statement defines closures in JavaScript?',
      answers: {
        a: 'JavaScript is a function that is enclosed with references to its inner function scope',
        b: 'JavaScript is a function that is enclosed with references to its lexical environment',
        c: 'JavaScript is a function that is enclosed with the object to its inner function scope',
        d: 'None of the mentioned',
      },
      correct: 'B',
      selected: null,
      explanation:'A closure is a function that is enclosed with references to its lexical environment. A closure allows an inner function to access the scope of an outside function. Closures are formed every time a function is created in JavaScript, during function creation time.',
    
      links: [
        {
          text: 'Javascript',
          href: 'https://www.sanfoundry.com/1000-javascript-questions-answers/',
        },
      ],
    },
    
   
    {
      text: 'Which of the following can be used to call a JavaScript Code Snippet?',
      answers: {
        a: 'Function/Method',
        b: 'Preprocessor',
        c: 'Triggering Event',
        d: 'RMI',
      },
      correct: 'a',
      selected: null,
      explanation:'A function call to the element on which JavaScript is to be run can be used to invoke JavaScript code. Other techniques include onclick, onload, and onsubmit, among others.',
    
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
      explanation:'JS code can change the behavior of windows, documents, and the elements that make up those documents via event handlers.',
    
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
      explanation:'In JavaScript, division by zero does not result in an error; it just returns infinity or negative infinity. However, because zero divided by zero has no well-defined value, the result of this operation is the unusual not-a-number value, which is written as NaN.',
    
      links: [
        {
          text: 'Javascript',
          href: 'https://www.sanfoundry.com/1000-javascript-questions-answers/',
        },
      ],
    },
    {
      text: 'JQ9- Which of the following is the property that is triggered in response to JS errors?',
      answers: {
        a: 'onclick',
        b: 'onerror',
        c: 'onmessage',
        d: 'onexception',
      },
      correct: 'b',
      selected: null,
      explanation:'The Window object’s onerror property acts as an event handler, and it is triggered when JavaScript problems occur. However, because it is called with various arguments, it isn’t a genuine event handler.',
    
      links: [
        {
          text: 'Javascript',
          href: 'https://www.sanfoundry.com/1000-javascript-questions-answers/',
        },
      ],
    },
    
  ],
};
