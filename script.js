// Here are all of the variables that select the main elements on the html page
var timerCountdownEl = document.getElementById('timerCountdown');
var introCardEl = document.getElementById('introCard');
var introCardHeaderEl = document.getElementById('introCardHeader');
var introCardParaEl = document.getElementById('introCardPara');
var quizStartButtonEl = document.getElementById('quizStartButton');
var viewHighScoresButtonEl = document.getElementById('viewHighScoresButton');
var questionCardEl = document.getElementById('questionCard');
var questionCardHeaderEl = document.getElementById('questionCardHeader');
var answerAButtonEl = document.getElementById('answerAButton');
var answerBButtonEl = document.getElementById('answerBButton');
var answerCButtonEl = document.getElementById('answerCButton');
var answerDButtonEl = document.getElementById('answerDButton');
var answerResultEl = document.getElementById('answerResult');
var currentScoreEl = document.getElementById('currentScore');
var gameOverCardEl = document.getElementById('gameOverCard');
var gameOverCardHeaderEl = document.getElementById('gameOverCardHeader');
var gameOverCardParaEl = document.getElementById('gameOverCardPara');
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
    answerD: 'Answer D: parseInt()',
    correctAnswer: "answerDButton"},
]

// Below are some global variables that are used throughout the functions defined below
var totalQuestions = quizQuestions.length;
var currentQuestion = 0;
var timeLeft = 51;
var timerInterval;
var score = 0;
var correct;

// This event listener allows the quiz to start with the click of the start quiz button
quizStartButtonEl.addEventListener('click', startQuiz);

// This function defines the startQuiz function that is called above when the start quiz button is pressed
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

// This function defines the askQuizQuestion function that is called in startQuiz when the start quiz button is pressed. It initiates the first quiz question and cycles through the quiz questions until they have all been answered.
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

// This function defines the checkQuestionAnswer function that allows the answer that the user selects to be checked if it is correct. The function is called onclick in the html page.
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


// This function allows the scorecard card to show up when the quiz game is over.
function showScore() {
    clearInterval(timerInterval);
    introCardEl.style.display = 'none';
    questionCardEl.style.display = 'none';
    gameOverCardEl.style.display = 'block';
    timerCountdownEl.textContent = 'Game over!';
    gameOverCardParaEl.textContent = 'Your score is ' + score +'. Nice job friend!';
}

// This event listener allows the user to submit their high score and does not allow them to click submit if the initials field is empty. It also stores their high score in local storage and displays any high scores that are being stored there.
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

// This event listener allows the user to go directly to the high score page from the quiz introduction.
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

// This event listener allows the user to play again by reloading the page.
playAgainButtonEl.addEventListener('click', function (){
    location.reload();
})

// This event listener engages a function that clears the local storage so that there are no high scores displayed anymore.
clearHighScoresButtonEl.addEventListener('click', function(){
    localStorage.clear();
    scoreBoard();
})