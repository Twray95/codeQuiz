var testbox = {
  question: "what color is the sky?",
  options: ["blue", "red", "green", "purple"],
  answer: "blue",
};
// console.log(testbox);
// console.log(typeof testbox);
// console.log(testbox.options);
// console.log(typeof testbox.options);
var testArray = ["blue", "red", "green", "purple"];
console.log(testArray);
console.log(typeof testArray);
console.log(testArray.at(1));
var optionsArray = [testbox.options.at(0)];
console.log(optionsArray);
console.log(typeof optionsArray);
console.log(optionsArray.at(1));

var option1El = document.querySelector("#option1");
var option2El = document.querySelector("#option2");
var option3El = document.querySelector("#option3");
var option4El = document.querySelector("#option4");

var question1 = {
  question: "What bracket encloses function code?",
  options: ["parens", "curly", "square", "none"],
  answer: "curly",
};
