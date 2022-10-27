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

// start game, 60 seconds on timer, resets score to 0, start at question 0
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
}

//when game stops, timer is stopped and cleared, questions are hidden then results are shown
function stopgame() {
    clearInterval(countdownTimer);
    timer.textContent = "60"

    quiz.style.display = 'none';
    result.style.display = 'flex';

    var summaryDisplay = document.createElement("p");
    summary.textContent = "Your Score is: " + score;
}

// saving the score
function onSaveScore(e) {
    var initials = document.getElementById("initials").value

    //saves to local storage
    if (initials !== "") {
        localStorage.setItem(initials, score);

        document.getElementById("initials").value = "";
    }
}

// viewing the score via external html
function onViewScores(e) {
    window.location.href = 'scores.html';
}

//selecting the answer choices
function onSelectAnswer(event) {
    var correctAnswer = questions[currentQuestion-1].answer;
    var userAnswer = event.target.textContent;
console.log("correctAnswer ", correctAnswer)    
console.log("userAnswer ", userAnswer)
    if (userAnswer === correctAnswer) {
        score++;

        displayMessage('You got it!')

    } else {
        displayMessage('Uh oh!')
    }

    //next question
    displayQuestion();
}

function displayMessage(msg) {
    message.textContent = msg;

    setTimeout(function () {
        message.textContent = "";
    }, 1000);
}

function displayQuestion(q) {

    var question = questions[currentQuestion];
    document.getElementById("question").textContent = question.title

    currentQuestion++;

    //clears the html for the options
    options.innerHTML = '';

    // no more questions
    if (currentQuestion >= questions.length) {
        stopgame();
        return;
    }

    for (var i = 0; i < question.choices.length; i++) {
        var option = document.createElement("div");
        option.textContent = question.choices[i];
        option.onclick = onSelectAnswer;
        option.classList.add("option");
        option.classList.add("btn")

        options.appendChild(option);
    }
}

// EventListeners
startQuiz.addEventListener("click", onStartQuiz);
saveScore.addEventListener("click", onSaveScore);
viewScores.addEventListener("click", onViewScores);
playAgain.addEventListener("click", onStartQuiz);