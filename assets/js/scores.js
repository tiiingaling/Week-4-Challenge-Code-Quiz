var scoresheet = document.getElementById("scoresheet")
var backtoQuiz = document.getElementById("backtoQuiz")

function onBacktoQuiz () {
    window.location.href = 'index.html';
}

for (var i = 0; i < localStorage.length; i++) {

    var initials = localStorage.key(i);
    var score = localStorage.getItem(initials);

    var scoresheet = document.getElementById("scoresheet");
    var result = document.createElement("li");

    result.innerHTML = `<div class="score-item">Initials: ${initials}</div>
             <div class="score-item">score: ${score}</div>`;

    scoresheet.appendChild(result);
}

backtoQuiz.addEventListener("click", onBacktoQuiz);