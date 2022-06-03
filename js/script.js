var startBtn = document.getElementById("start-Btn");

function startQuiz() {
console.log("it worked");
}
startBtn.addEventListener("click", startQuiz);

//timer section

var startingMinutes= 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

setInterval(setCoutndown, 1000);

function setCoutndown() {
   var minutes = Math.floor(time / 60);
   const seconds = time % 60;

   countdownEl.innerHTML = `${minutes}: ${seconds}`;
   time--;
}