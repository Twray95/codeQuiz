var startBtn = document.querySelector("#start");
var questionEl = document.querySelector("#questionActual");
var option1El = document.querySelector("#option1");
var option2El = document.querySelector("#option2");
var option3El = document.querySelector("#option3");
var option4El = document.querySelector("#option4");
var answerBoxEl = document.querySelector(".answerBox");
var questionSelector = [fillInQuestionCard1, fillInQuestionCard2];

var question1 = {
  question: "What bracket encloses function code?",
  options: ["parens", "curly", "square", "none"],
  answer: "curly",
};

var question2 = {
  question: "will this work?",
  options: ["yes", "no", "maybe", "try again"],
  answer: "yes",
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
  answer = question2.options.at(0);
}

answerBoxEl.addEventListener("click", function (event) {
  var element = event.target;
  qPosition = 0;
  console.log(qPosition);
  if (element.classList.contains("answerOption")) {
    if (element.textContent == answer) {
      console.log("correct");
      qPosition++;
      questionSelector[qPosition]();
    } else {
      console.log("wrong");
      questionSelector[qPosition]();
    }
  }
});

startBtn.addEventListener("click", function () {
  fillInQuestionCard1();
  //start timer to be added
});

// ARRAY OF FUNCTIONS!!!!

// fillInQuestionCard1();
