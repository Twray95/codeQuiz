var questionEl = document.querySelector("#questionActual");
var option1El = document.querySelector("#option1");
var option2El = document.querySelector("#option2");
var option3El = document.querySelector("#option3");
var option4El = document.querySelector("#option4");
var answerBoxEl = document.querySelector(".answerBox");

var question1 = {
  question: "What bracket encloses function code?",
  options: ["parens", "curly", "square", "none"],
  answer: "curly",
};

function fillInQuestionCard() {
  questionEl.textContent = question1.question;
  option1El.textContent = question1.options.at(0);
  option2El.textContent = question1.options.at(1);
  option3El.textContent = question1.options.at(2);
  option4El.textContent = question1.options.at(3);
  answer = question1.options.at(1);
}

answerBoxEl.addEventListener("click", function (event) {
  var element = event.target;
  if (element.classList.contains("answerOption")) {
    if (element.textContent == answer) {
      //add reduce timer and move to next question
      console.log("correct");
    } else {
      //move to next answer
      console.log("wrong");
    }
  }
});

fillInQuestionCard();
