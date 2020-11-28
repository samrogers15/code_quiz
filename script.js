// Here are all of the variables that select the main elements on the html page
var highScoresLinkEl = document.getElementById('highScoresLink');
var timerCountdownEl = document.getElementById('timerCountdown');
var introCardEl = document.getElementById('introCard');
var introCardHeaderEl = document.getElementById('introCardHeader');
var introCardParaEl = document.getElementById('introCardPara');
var quizStartButtonEl = document.getElementById('quizStartButton');
var viewHighScoresButtonEl = document.getElementById('viewHighScoresButton');
var questionCardEl = document.getElementById('questionCard');
var questionCardHeaderEl = document.getElementById('questionCardHeader');
var questionCardParaEl = document.getElementById('questionCardPara');
var questionCardEl = document.getElementById('questionCard');
var answerAButtonEl = document.getElementById('answerAButton');
var answerBButtonEl = document.getElementById('answerBButton');
var answerCButtonEl = document.getElementById('answerCButton');
var answerDButtonEl = document.getElementById('answerDButton');
var answerResultEl = document.getElementById('answerResult');
var gameOverCardEl = document.getElementById('gameOverCard');
var gameOverCardHeaderEl = document.getElementById('gameOverCardHeader');
var gameOverCardParaEl = document.getElementById('gameOverCardPara');
var enterHighScoreEl = document.getElementById('enterHighScore');
var enterInitialsEl = document.getElementById('enterInitials');
var submitHighScoreEl = document.getElementById('submitHighScore');
var startOverLinkEl = document.getElementById('startOverLink');
var highScoreCardEl = document.getElementById('highScoreCard');
var highScoreCardHeaderEl = document.getElementById('highScoreCardHeader');
var highScoreCardParaEl = document.getElementById('highScoreCardPara');
var playAgainButtonEl = document.getElementById('playAgainButton');
var clearHighScoresButtonEl = document.getElementById('clearHighScoresButton');



// add event listener to start button so that when it is clicked, a function performs 

// make questions a variable and make the answers an array (make an object with)

var askQuestionOne = {
    questionOne: 'how old are you?',
    answerA: 23,
    answerB: 24,
    answerC: 25,
    answerD: 26,
}
console.log(askQuestionOne)
// if else statements

// change text content of element to be question variable and answer array