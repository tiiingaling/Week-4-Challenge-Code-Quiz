var startQuiz = document.getElementById("startQuiz")
var saveScore = document.getElementById("saveScore")
var viewScores = document.getElementById("viewScores")
var timer = document.getElementById("timer")

var summary = document.getElementById("summary")

// other variables
var secondsLeft = 0;
var score = 0;
var currentQuestion = 0;
var countdownTimer;



function onStartGame()
function onSaveScore()
function onViewScores()
function onStartAgain()







startQuiz.addEventListener("click", onStartGame);
saveScore.addEventListener("click", onSaveScore);
viewScores.addEventListener("click", onViewScores);
playAgain.addEventListener("click", onStartGame);