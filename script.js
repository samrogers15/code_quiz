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

// Here is the variable that defines the quiz question objects
var quizQuestions = [{
    question: "Here is question one?",
    answerA: "Here is where answer A goes quest 1",
    answerB: "Here is where answer B goes quest 1",
    answerC: "Here is where answer C goes quest 1",
    answerD: "Here is where answer D goes quest 1",
    correctAnswer: "answerBButton"},
    
    {
    question: "Here is question Two?",
    answerA: "Here is where answer A goes quest 2",
    answerB: "Here is where answer B goes quest 2",
    answerC: "Here is where answer C goes quest 2",
    answerD: "Here is where answer D goes quest 2",
    correctAnswer: "answerCButton"},
    
    {
    question: "Here is question Three?",
    answerA: "Here is where answer A goes quest 3",
    answerB: "Here is where answer B goes quest 3",
    answerC: "Here is where answer C goes quest 3",
    answerD: "Here is where answer D goes quest 3",
    correctAnswer: "answerAButton"},

    {
    question: "Here is question Four?",
    answerA: "Here is where answer A goes quest 4",
    answerB: "Here is where answer B goes quest 4",
    answerC: "Here is where answer C goes quest 4",
    answerD: "Here is where answer D goes quest 4",
    correctAnswer: "answerDButton"},

    {
    question: "Here is question Five?",
    answerA: "Here is where answer A goes quest 5",
    answerB: "Here is where answer B goes quest 5",
    answerC: "Here is where answer C goes quest 5",
    answerD: "Here is where answer D goes quest 5",
    correctAnswer: "answerCButton"},

    {
    question: "Here is question Six?",
    answerA: "Here is where answer A goes quest 6",
    answerB: "Here is where answer B goes quest 6",
    answerC: "Here is where answer C goes quest 6",
    answerD: "Here is where answer D goes quest 6",
    correctAnswer: "answerCButton"},

    {
    question: "Here is question Seven?",
    answerA: "Here is where answer A goes quest 7",
    answerB: "Here is where answer B goes quest 7",
    answerC: "Here is where answer C goes quest 7",
    answerD: "Here is where answer D goes quest 7",
    correctAnswer: "answerAButton"},

    {
    question: "Here is question Eight?",
    answerA: "Here is where answer A goes quest 8",
    answerB: "Here is where answer B goes quest 8",
    answerC: "Here is where answer C goes quest 8",
    answerD: "Here is where answer D goes quest 8",
    correctAnswer: "answerBButton"},
]

var totalQuestions = quizQuestions.length;
var currentQuestion = 0;
var timeLeft = 51;
var timerInterval;
var score = 0;
var correct;

// This is where the quiz will start 
quizStartButtonEl.addEventListener('click', startQuiz);

function askQuizQuestion() {
    if (currentQuestion === totalQuestions) {
        return  scorePage();
    } else {
        var startQuestion = quizQuestions[currentQuestion];
        questionCardHeaderEl.textContent = startQuestion.question;
        var answers = [startQuestion.answerA, startQuestion.answerB, startQuestion.answerC, startQuestion.answerD];
        for (i = 0; i <answers.length; i++) {
            var newList = document.createElement('li');
            var answerContent = answers[i];
            newList.textContent = answerContent;
            questionCardHeaderEl.appendChild(newList);
        }
    }
}

function startQuiz () {
    introCardEl.style.display = 'none';
    questionCardEl.style.display = 'block';
    askQuizQuestion();
}

// need to add in a scorePage function
// quizStartButtonEl.addEventListener('click', function (startQuiz){
//     introCardEl.style.display = 'none';
//     console.log('this is the quiz start button');
//     if (currentQuestions === totalQuestions)
// }
// )



// add event listener to start button so that when it is clicked, a function performs 

// make questions a variable and make the answers an array (make an object with)

// var askQuestionOne = {
//     questionOne: 'how old are you?',
//     answerA: 23,
//     answerB: 24,
//     answerC: 25,
//     answerD: 26,
// }
// console.log(askQuestionOne)
// // if else statements

// change text content of element to be question variable and answer array