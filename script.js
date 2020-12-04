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
var questionCardEl = document.getElementById('questionCard');
var answerAButtonEl = document.getElementById('answerAButton');
var answerBButtonEl = document.getElementById('answerBButton');
var answerCButtonEl = document.getElementById('answerCButton');
var answerDButtonEl = document.getElementById('answerDButton');
var answerButtons = document.querySelector('.button-answer');
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
var highScoreCardListEl = document.getElementById('highScoreCardList');
var highScoreCardListTwoEl = document.getElementById('highScoreCardListTwo');
var playAgainButtonEl = document.getElementById('playAgainButton');
var clearHighScoresButtonEl = document.getElementById('clearHighScoresButton');

// Here is the variable that defines the quiz question objects
var quizQuestions = [{
    question: 'When using the .querySelector method to select an element with a specific Id, which symbol do you place in front of the Id name?',
    answerA: 'Answer A: $',
    answerB: 'Answer B: #',
    answerC: 'Answer C: !',
    answerD: 'Answer D: &',
    correctAnswer: 'answerBButton'},
    
    {
    question: 'What html tag must be included in order for javascript to be operational?',
    answerA: 'Answer A: <body>',
    answerB: 'Answer B: <html>',
    answerC: 'Answer C: <script>',
    answerD: 'Answer D: <div>',
    correctAnswer: 'answerCButton'},
    
    {
    question: 'If you wanted to operationalize a button, what Javascript method might you use?',
    answerA: 'Answer A: addEventListener()',
    answerB: 'Answer B: getElementbyId()',
    answerC: 'Answer C: querySelector()',
    answerD: 'Answer D: querySelectorAll()',
    correctAnswer: 'answerAButton'},

    {
    question: 'What function would you use to convert a number stored as a string into an integer?',
    answerA: 'Answer A: numberConvert()',
    answerB: 'Answer B: convert()',
    answerC: 'Answer C: parse()',
    answerD: 'AnswerD: parseInt()',
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
        timerCountdownEl.textContent = 'Time left: ' + timeLeft +'s';

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
    gameOverCardParaEl.textContent = 'Your score is ' + score +'. Nice job friend!';
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

viewHighScoresButtonEl.addEventListener('click', scoreBoard);

function scoreBoard() {
    introCardEl.style.display = 'none';
    questionCardEl.style.display = 'none';
    gameOverCardEl.style.display = 'none';
    highScoreCardEl.style.display = 'block';
    var highScoreList = JSON.parse(localStorage.getItem('storedHighScores')) || [];
    for (i = 0; i < highScoreList.length; i++) {
        var nameList = document.createElement('li');
        nameList.textContent = highScoreList[i].name;
        highScoreCardListEl.appendChild(nameList,);
        var scoreList = document.createElement('li');
        scoreList.textContent = highScoreList[i].score;
        highScoreCardListTwoEl.appendChild(scoreList);
    }
}

playAgainButtonEl.addEventListener('click', function (){
    location.reload();
})

clearHighScoresButtonEl.addEventListener('click', function(){
    localStorage.clear();
    scoreBoard();
})

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


// Questions for Trevor

// How to append the list properly
// Do I need the global variables or should i define them within the functions?
// Why is there a delay in the timer starting
// Where should I put the event listeners for the answer buttons instead of onclick in html