'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

let totalScore = 0;

export const userScore = (increase = false,reset = false)=>{
  
  if (increase){
    totalScore++;
  }
  if (reset){
    totalScore =0;
  }
  return totalScore;
}

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'What are the different ways to declare a JS variable?',
      answers: {
        a: 'constant, let, variable',
        b: 'var, const, let, function',
        c: 'var, let, const',
      },
      correct: 'c',
      selected: null,
      // this explanation 200char max will pop up as an alarm in the browser
      explanation:'const is not the same as letconst is not the same as letconst is not the same as let',
      // Links reference for the hint or explanation
      links: [
        {
          text: 'Some hint!1',
          href: 'https://www.examlple.com',
        },
      ],
    },
    {
      text: 'What does `typeof` do?',
      answers: {
        a: 'changes the type of a primitive value',
        b: 'returns a string describing the type of a value',
        c: 'determines if a value is primitive',
        d: 'can tell the difference between arrays and objects',
      },
      correct: 'b',
      selected: null,
      explanation:'const is not the same as letconst is not the same as letconst is not the same as let',
      links: [
        {
          text: 'Somehint!!!2',
          href: 'https://www.examlple.com',
        },
      ],
    },
    // Add more questions here
  ],
};
