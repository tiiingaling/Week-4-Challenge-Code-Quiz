// essential variables
var startQuiz = document.getElementById("startQuiz")
var saveScore = document.getElementById("saveScore")
var viewScores = document.getElementById("viewScores")
var playAgain = document.getElementById("playAgain")

var welcome = document.getElementById("welcome")
var quiz = document.getElementById("quiz")

var result = document.getElementById("result")

var timer = document.getElementById("timer")

var options = document.getElementById("options")
var message = document.getElementById("message")

var summary = document.getElementById("summary")

// other variables
var secondsLeft = 0;
var score = 0;
var currentQuestion = 0;
var countdownTimer;

function onStartQuiz() {
    secondsLeft = 60;
    currentQuestion = 0;
    score = 0;

    quiz.style.display = 'block'
    startQuiz.style.display = 'none'
    result.style.display = 'none'

    countdownTimer = setInterval(function () {

        console.log(secondsLeft)
        if (secondsLeft > 0) {
            timer.textContent = secondsLeft
        } else {
            stopgame();
        }
        secondsLeft--;
    }, 1000);

    displayQuestion(currentQuestion);

function stopgame() {
    clearInterval(countdownTimer);
    timer.textContent = "60"

    quiz.style.display = 'none';
    result.style.display = 'flex';

    var summaryDisplay = document.createElement("p");
    summary.textContent = "Your Score is: " + score;
}

function onSaveScore()
function onViewScores()







startQuiz.addEventListener("click", onStartQuiz);
saveScore.addEventListener("click", onSaveScore);
viewScores.addEventListener("click", onViewScores);
playAgain.addEventListener("click", onStartQuiz);