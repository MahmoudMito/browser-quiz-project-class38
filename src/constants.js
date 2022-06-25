'use strict';

/*
 The constants file is used to store anything 
 that multiple files use, that should ALWAYS be the same
 
 It is an industry standard to make these variables fully capitalised
*/

export const USER_INTERFACE_ID = 'user-interface';
export const START_QUIZ_BUTTON_ID = 'start-quiz-button';
export const ANSWERS_LIST_ID = 'answers-list';
export const GIVEUP_QUESTION_BUTTON_ID = 'giveup-question-button';
export const BACKGROUND_ID = 'background';
export const BACKGROUND_OVERLAY_ID = 'background-overlay';
export const BACKGROUND_UNDERLAY_ID = 'background-underlay';
export const BACKGROUND_MATRIX_ID = 'background-matrix';
export const BACKGROUND_SPAN_MATRIX_ID_OFFSET = 'background-span-matrix-';
export const UPDATE_MATRIX_INTERVAL_TIME = 100;
export const STACK_FONT_SIZE_CSS_VAR = '--stack-font-size';
export const ACTIVE_BUTTON_ANIMATION = 'active-effect-anime';
export const CORRECT_ANSWER_LIST_ANIMATION = 'correct-answer-effect-anime';
export const CORRECT_ANSWER_LIST_INDICATION = 'correct-answer-indication';
export const WRONG_ANSWER_LIST_ANIMATION = 'wrong-answer-effect-anime';
export const PRIMARY_COLOR_CSS_VAR = '--primary-color';
export const ACCENT_COLOR_CSS_VAR = '--accent-color';
export const TIMER_ID = 'timer';
export const EXPLANATION_BUTTON_ID = 'explanation-question-button';
export const NEXT_QUESTION_BUTTON_ID = 'next-question-button';
export const QUESTION_CONTAINER_ID = 'question-container';
export const QUESTION_NAVIGATION_BUTTON_CONTAINER_ID = 'question-navigation-buttons-container';
export const RESULT_CONTAINER_ID = 'result-container';
export const SCROLLABLE_CLASS = 'scrollable';
export const RESULT_CORRECT_ANSWER = 'result-correct-answer';
export const RESULT_WRONG_ANSWER = 'result-wrong-answer';
export const SCORE_ID = 'score';
export const INFO_CONTAINER = 'info-container';
export const BUTTON_BORDER_SIZE_CSS_VAR = '--button-border-size';
export const WRONG_ANSWER_COLOR_CSS_VAR = '--wrong-answer-color';
export const CORRECT_ANSWER_COLOR_CSS_VAR = '--correct-answer-color';
export const EXPLANATION_CONTAINER_ID = 'explanation-container';
export const EXTERNAL_LINKS_ID = 'external-links';
export const EXPLANATION_TEXT_ID = 'explanation-text';
export const POPUP_CONTAINER_ID = 'popup-container';
export const POPUP_BACKGROUND_COLOR = '--popup-background-color';
export const POPUP_CLOSE_BUTTON_ID = 'popup-close-button';
export const STORAGE_KEY = 'quizData';
export const STORAGE_KEY_TIME = 'quizTime';
export const RESTART_BUTTON_ID = 'restart-button';
export const WELCOME_CONTAINER_ID = 'welcome-container';
export const ALPHANUMERIC_MATRIX = {
  LETTERS_UPPERCASE: [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ],
  LETTERS_LOWERCASE: [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ],
  LETTERS_ARABIC: [
    'غ',
    'ظ',
    'ض',
    'ذ',
    'خ',
    'ث',
    'ت',
    'ش',
    'ر',
    'ق',
    'ص',
    'ف',
    'ع',
    'س',
    'ن',
    'م',
    'ل',
    'ك',
    'ي',
    'ط',
    'ح',
    'ز',
    'و',
    'ه',
    'د',
    'ج',
    'ب',
    'أ',
  ],
  NUMBERS: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  SYMBOLS: ['*', '(', ')', '-', '+', '#', '@', '!', '?', '>', '<'],
};

