var startBtn = document.getElementById("start-Btn");

var btnQ1A1= document.querySelector("#strings")
var btnQ1A2= document.querySelector("#booleans1")
var btnQ1A3= document.querySelector("#alerts")
var btnQ1A4= document.querySelector("#numbers")

var btnQ2A1= document.querySelector("#commas")
var btnQ2A2= document.querySelector("#curly-brackets1")
var btnQ2A3= document.querySelector("#quotes1")
var btnQ2A4= document.querySelector("#parenthesis")

var btnQ3A1= document.querySelector("#JavaScript")
var btnQ3A2= document.querySelector("#terminal-bash")
var btnQ3A3= document.querySelector("#for-loops")
var btnQ3A4= document.querySelector("#console-log")

var btnQ4A1= document.querySelector("#quotes")
var btnQ4A2= document.querySelector("#curly-brackets")
var btnQ4A3= document.querySelector("#parenthesis")
var btnQ4A4= document.querySelector("#square-brackets")

var btnQ5A1= document.querySelector("#numbers-and-strings")
var btnQ5A2= document.querySelector("#other-arrays")
var btnQ5A3= document.querySelector("#booleans")
var btnQ5A4= document.querySelector("#all-of-the-above")

btnQ1A1.addEventListener("click", answerQuestions);
btnQ1A2.addEventListener("click", answerQuestions);
btnQ1A3.addEventListener("click", answerQuestions);
btnQ1A4.addEventListener("click", answerQuestions);

btnQ2A1.addEventListener("click", answerQuestions);
btnQ2A2.addEventListener("click", answerQuestions);
btnQ2A3.addEventListener("click", answerQuestions);
btnQ2A4.addEventListener("click", answerQuestions);

btnQ3A1.addEventListener("click", answerQuestions);
btnQ3A2.addEventListener("click", answerQuestions);
btnQ3A3.addEventListener("click", answerQuestions);
btnQ3A4.addEventListener("click", answerQuestions);

btnQ4A1.addEventListener("click", answerQuestions);
btnQ4A2.addEventListener("click", answerQuestions);
btnQ4A3.addEventListener("click", answerQuestions);
btnQ4A4.addEventListener("click", answerQuestions);

btnQ5A1.addEventListener("click", answerQuestions);
btnQ5A2.addEventListener("click", answerQuestions);
btnQ5A3.addEventListener("click", answerQuestions);
btnQ5A4.addEventListener("click", answerQuestions);

var question1 = ["strings","booleans","alerts","numbers"];
var index1 = "booleans";

var question2= ["commas","curly brackets","quotes","parenthesis"];
var index2 = "curly brackets";

var question3= ["JavaScript","terminal/bash","for loops","console.log"];
var index3 = "for loops";

var question4= ["quotes","curly brackets","parenthesis","square brackets"];
var index4 = "quotes";

var question5= ["numbers and strings","other arrays","booleans","all of the above"];
var index5 = "booleans";

function answerQuestions(event) {
   var btn= event.target;
   var answered= btn.innerHTML;
   var questionID= btn.closest("div").id;
   console.log(answered);
   console.log(questionID);


   if (questionID === "Q1") {
    if (answered === index1) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
} else if (questionID === "Q2") {
    if (answered === index2) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
} else if (questionID === "Q3") {
    if (answered === index3) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
} else if (questionID === "Q4") {
    if (answered === index4) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
} else if (questionID === "Q5") {
    if (answered === index5) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
   }
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
