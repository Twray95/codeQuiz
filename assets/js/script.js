var mainEl = document.querySelector(".main");
var homePageEl = document.querySelector(".homePage");
var startBtn = document.querySelector("#start");
var questionEl = document.querySelector("#questionActual");
var option1El = document.querySelector("#option1");
var option2El = document.querySelector("#option2");
var option3El = document.querySelector("#option3");
var option4El = document.querySelector("#option4");
var answerBoxEl = document.querySelector(".answerBox");
var currentTime = document.querySelector("#timer");
var qPosition = 0;
var timeRemain = 100;
var questionSelector = [
  fillInQuestionCard1,
  fillInQuestionCard2,
  fillInQuestionCard3,
  fillInQuestionCard4,
  fillInQuestionCard5,
  fillInQuestionCard6,
  fillInQuestionCard7,
  fillInQuestionCard8,
  endQuiz,
];

var question1 = {
  question: "What bracket encloses function code?",
  options: ["parens", "curly", "square", "none"],
  answer: "curly",
};

var question2 = {
  question: "Inside which HTML element do you put the JavaScript link?",
  options: ["<scripting>", "<js>", "<javascript>", "<script>"],
  answer: "<script>",
};

var question3 = {
  question: "What is the correct place to insert a JavaScript?",
  options: [
    "The <head> element",
    "The <body> element",
    "Both the <head> and the <body>",
    "Neither",
  ],
  answer: "The <body> element",
};

var question4 = {
  question: "How would you write 'Hello World' in an alert box?",
  options: [
    "msg('Hello World');",
    "alert('Hello World');",
    "alertBox('Hello World');",
    "msgBox('Hello World');",
  ],
  answer: "alert('Hello World');",
};

var question5 = {
  question: "How do you create a function in JavaScript?",
  options: [
    "function myFunction()",
    "function:myFunction()",
    "function = myFunction()",
    "None of the above",
  ],
  answer: "function myFunction()",
};

var question6 = {
  question: "How do you call a function named 'myFunction'?",
  options: [
    "myFunction()",
    "call function myFunction()",
    "call myFunction()",
    "None of the above",
  ],
  answer: "myFunction()",
};

var question7 = {
  question: "Commonly used data types DO NOT include:",
  options: ["Strings", "Booleans", "Alerts", "Numbers"],
  answer: "Alerts",
};

var question8 = {
  question: "The condition in an if/else statement is enclosed with ______.",
  options: ["quotes", "curly brackets", "parens", "square brackets"],
  answer: "parens",
};

function fillInQuestionCard1() {
  questionEl.textContent = question1.question;
  option1El.textContent = question1.options.at(0);
  option2El.textContent = question1.options.at(1);
  option3El.textContent = question1.options.at(2);
  option4El.textContent = question1.options.at(3);
  answer = question1.options.at(1);
}

function fillInQuestionCard2() {
  questionEl.textContent = question2.question;
  option1El.textContent = question2.options.at(0);
  option2El.textContent = question2.options.at(1);
  option3El.textContent = question2.options.at(2);
  option4El.textContent = question2.options.at(3);
  answer = question2.options.at(3);
}

function fillInQuestionCard3() {
  questionEl.textContent = question3.question;
  option1El.textContent = question3.options.at(0);
  option2El.textContent = question3.options.at(1);
  option3El.textContent = question3.options.at(2);
  option4El.textContent = question3.options.at(3);
  answer = question3.options.at(1);
}

function fillInQuestionCard4() {
  questionEl.textContent = question4.question;
  option1El.textContent = question4.options.at(0);
  option2El.textContent = question4.options.at(1);
  option3El.textContent = question4.options.at(2);
  option4El.textContent = question4.options.at(3);
  answer = question4.options.at(1);
}

function fillInQuestionCard5() {
  questionEl.textContent = question5.question;
  option1El.textContent = question5.options.at(0);
  option2El.textContent = question5.options.at(1);
  option3El.textContent = question5.options.at(2);
  option4El.textContent = question5.options.at(3);
  answer = question5.options.at(0);
}

function fillInQuestionCard6() {
  questionEl.textContent = question6.question;
  option1El.textContent = question6.options.at(0);
  option2El.textContent = question6.options.at(1);
  option3El.textContent = question6.options.at(2);
  option4El.textContent = question6.options.at(3);
  answer = question6.options.at(1);
}

function fillInQuestionCard7() {
  questionEl.textContent = question7.question;
  option1El.textContent = question7.options.at(0);
  option2El.textContent = question7.options.at(1);
  option3El.textContent = question7.options.at(2);
  option4El.textContent = question7.options.at(3);
  answer = question7.options.at(2);
}

function fillInQuestionCard8() {
  questionEl.textContent = question8.question;
  option1El.textContent = question8.options.at(0);
  option2El.textContent = question8.options.at(1);
  option3El.textContent = question8.options.at(2);
  option4El.textContent = question8.options.at(3);
  answer = question8.options.at(2);
}

function endQuiz() {
  clearInterval();
  console.log(timeRemain);
}

function removeTime() {
  timeRemain--;
  timeRemain--;
  timeRemain--;
  timeRemain--;
  timeRemain--;
  currentTime.textContent = timeRemain;
}

// var timerFun = setInterval(function () {
//   timeRemain--;
//   currentTime.textContent(timeRemain);
// }, 1000);

answerBoxEl.addEventListener("click", function (event) {
  var element = event.target;
  if (element.classList.contains("answerOption")) {
    if (element.textContent == answer) {
      console.log("correct");
      qPosition++;
      questionSelector[qPosition]();
    } else {
      console.log("wrong");
      removeTime();
      qPosition++;
      questionSelector[qPosition]();
    }
  } else {
    return;
  }
});

startBtn.addEventListener("click", startQuiz);
//start timer to be added

// retryBtn.addEventListener("click", function () {
//   timeRemain = 60;
//   startQuiz();
// });

// fillInQuestionCard1();

function startQuiz() {
  fillInQuestionCard1();
  homePageEl.textContent = "";
  var timerFun = setInterval(function () {
    timeRemain--;
    currentTime.textContent = timeRemain;
    console.log(timeRemain);
    if (timeRemain <= 0) {
      clearInterval(timerFun);
      homePageEl.textContent = "GAME OVER!";
      var retryBtn = document.createElement("button");
      retryBtn.textContent = "Try Again!";
      homePageEl.appendChild(retryBtn);
      retryBtn.addEventListener("click", function () {
        timeRemain = 60;
        qPosition = 0;
        startQuiz();
      });
    }
  }, 1000);
}
