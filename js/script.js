var startBtn = document.getElementById("start-Btn");

var question1 = ["strings","booleans","alerts","numbers"];
let index = question1.indexOf("booleans", 1);

var question2= ["commas","curly brackets","quotes","parenthesis"];
let index = question2.indexOf("curly brackets", 2);

var question3= ["JavaScript","terminal/bash","for loops","console.log"];
let index = question3.indexOf("for loops", 3);

var question4= ["quotes","curly brackets","parenthesis","square brackets"];
let index = question4.indexOf("quotes", 4);

var question5= ["numbers and strings","other arrays","booleans","all of the above"];
let index = question5.indexOf("booleans", 5);

btnQ1.addEventListener("click", answerQuestions);
btnQ2.addEventListener("click", answerQuestions);
btnQ3.addEventListener("click", answerQuestions);
btnQ4.addEventListener("click", answerQuestions);
btnQ5.addEventListener("click", answerQuestions);

function answerQuestions() {
   var 
}

function startQuiz() {
console.log("it worked");
setInterval(setCoutndown, 1000);
}
startBtn.addEventListener("click", startQuiz);

//timer section

var startingMinutes= 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

function setCoutndown() {
   var minutes = Math.floor(time / 60);
   const seconds = time % 60;

   countdownEl.innerHTML = `${minutes}: ${seconds}`;
   time--;
}
// end timer section
