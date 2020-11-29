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
var currentScoreEl = document.getElementById('currentScore');
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
    question: 'Here is question one?',
    answerA: 'Here is where answer A goes quest 1',
    answerB: 'Here is where answer B goes quest 1',
    answerC: 'Here is where answer C goes quest 1',
    answerD: 'Here is where answer D goes quest 1',
    correctAnswer: 'answerBButton'},
    
    {
    question: 'Here is question Two?',
    answerA: 'Here is where answer A goes quest 2',
    answerB: 'Here is where answer B goes quest 2',
    answerC: 'Here is where answer C goes quest 2',
    answerD: 'Here is where answer D goes quest 2',
    correctAnswer: 'answerCButton'},
    
    {
    question: 'Here is question Three?',
    answerA: 'Here is where answer A goes quest 3',
    answerB: 'Here is where answer B goes quest 3',
    answerC: 'Here is where answer C goes quest 3',
    answerD: 'Here is where answer D goes quest 3',
    correctAnswer: 'answerAButton'},

    {
    question: 'Here is question Four?',
    answerA: 'Here is where answer A goes quest 4',
    answerB: 'Here is where answer B goes quest 4',
    answerC: 'Here is where answer C goes quest 4',
    answerD: 'Here is where answer D goes quest 4',
    correctAnswer: "answerDButton"},
]

var totalQuestions = quizQuestions.length;
var currentQuestion = 0;
var timeLeft = 51;
var timerInterval;
var score = 0;
var correct;

// This is where the quiz will start 
quizStartButtonEl.addEventListener('click', startQuiz);

// viewHighScoresButtonEl.addEventListener('click', highScores);

function startQuiz () {
    introCardEl.style.display = 'none';
    questionCardEl.style.display = 'block';
    askQuizQuestion();

    timerInterval = setInterval(function() {
        timeLeft--;
        timerCountdownEl.textContent = 'Time left ' + timeLeft +'s';

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);
    
}

function askQuizQuestion() {
    if (currentQuestion === totalQuestions) {
        return  showScore();
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

// We need score to go up, time to go up, or time to go down if wrong
function checkQuestionAnswer(answer) {
    correct = quizQuestions[currentQuestion].correctAnswer;
 
    if (answer === correct && currentQuestion !== totalQuestions) {
        score++;
        var displayScore = 'Curent score: ' + score;
        currentScoreEl.textContent = displayScore;
        console.log(displayScore);
        var confirmCorrect = 'That is correct!';
        answerResultEl.textContent = confirmCorrect;
        currentQuestion++;
        askQuizQuestion();
    } else if (answer !== correct && currentQuestion !== totalQuestions) {
        timeLeft -=10;
        var displayScore = 'Curent score: ' + score;
        currentScoreEl.textContent = displayScore;
        var confirmIncorrect = 'That is incorrect!';
        answerResultEl.textContent = confirmIncorrect;
        currentQuestion++;
        askQuizQuestion();
    } else {
        showScore();
    }
}

// Need to define this function - it will bring the user tot he scorecard page
function showScore() {
    clearInterval(timerInterval);
    introCardEl.style.display = 'none';
    questionCardEl.style.display = 'none';
    gameOverCardEl.style.display = 'block';
    timerCountdownEl.textContent = 'Game over!';
    gameOverCardParaEl.textContent = 'Your score is ' + score;
}

submitHighScoreEl.addEventListener('click', function submitHighScores() {
    if (enterInitialsEl.value === '') {
        alert('You must enter your initials in order to submit your score. Please try again.');
        return false;
    } else {
        var storedHighScores = JSON.parse(localStorage.getItem('storedHighScores')) || [];
        var currentPlayer = enterInitialsEl.value.trim();
        var currentHighScore = {
            name : currentPlayer,
            score : score
        };
        introCardEl.style.display = 'none';
        questionCardEl.style.display = 'none';
        gameOverCardEl.style.display = 'none';
        highScoreCardEl.style.display = 'block';

        storedHighScores.push(currentHighScore);
        localStorage.setItem('storedHighScores', JSON.stringify(storedHighScores));
        scoreBoard();
    }
})

function scoreBoard() {
    
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

