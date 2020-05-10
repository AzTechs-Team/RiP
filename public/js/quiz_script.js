var current = 0;
var random = 0;
var allQuestions = [
  [
    "Which of the following would you most hate people to call you?",
    "Given the choice, would you rather invent a potion that would guarantee you: ",
    "What kind of instrument most pleases your ear? ",
    "Which of the following do you find most difficult to deal with? ",
    "Which of the following would you most like to study?",
  ],
  [
    ["Are you an introvert or an extrovert?"],
    ["Are you organized or messy?"],
    ["Are you lazy?"],
    ["Are you  impulsive or calculative?"],
    ["Do you have a dog allergy?"],
  ],
];

var allAnswers = [
  [
    ["Ordinary", "Ignorant", "Cowardly", "Selfish"],
    ["Love", "Glory", "Wisdom", "Power"],
    ["The violin", "The trumpet", "The piano", "The drum"],
    ["Cold", "Loneliness", "Boredom", "Being ignored"],
    ["Ghosts", "Vampires", "Trolls", "Centaurs"],
  ],
  [
    ["Introver", "Extrovert", "Both", "None"],
    ["Organized", "messy", "Kinda messy", "Kinda organized"],
    ["Yes", "No shit", "Why do you think i'm taking this quiz", "hell no"],
    ["Impulsive", "calculative", "Depends", "neither, i'm just lazy"],
    ["Yes", "No", "Get that thing away from me", "Doggo is life"],
  ],
];
var houseType = [
  [
    ["h", "r", "g", "s"],
    ["g", "h", "r", "s"],
    ["h", "g", "r", "s"],
    ["r", "h", "g", "s"],
    ["g", "h", "s", "r"],
  ],
  [
    //h=amy,r=jake,g=charles,s=no-one
    ["h", "r", "g", "s"],
    ["h", "r", "g", "s"],
    ["r", "s", "g", "h"],
    ["r", "h", "g", "s"],
    ["r", "h", "s", "g"],
  ],
];

var finalResult = [
  ["Hufflepuff", "Gryffindor", "Ravenclaw", "Slytherin"],
  ["Amy", "Jake", "Charles", "No-one"],
];
var allTitles = ["Sorting Quiz", "Jake or Amy?"];
allSubtitles = [
  "Find which house you are in!!",
  "Find out which character you are most like in popular sitcom Brooklyn 99",
];

var answerArr = [0, 0, 0, 0];
var questionArea = document.getElementsByClassName("questions")[0],
  answerArea = document.getElementsByClassName("answers")[0],
  heading = document.getElementById("heading"),
  start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quiz_card = document.getElementById("quiz_card");
var title = document.getElementById("title");
var subtitle = document.getElementById("subtitle");

function RandomNumber() {
  return Math.floor(Math.random() * 2);
}

random = RandomNumber();
title.innerHTML = allTitles[random];
subtitle.innerHTML = allSubtitles[random];
start.addEventListener(
  "click",
  (loadQuiz = () => {
    var box = document.createElement("section");
    quiz.appendChild(box);
    quiz.appendChild(questionArea);
    quiz.appendChild(answerArea);
    start.remove();

    $("#quiz_card").removeClass("d-none");
    $("#heading_card").addClass("d-none");
    progressQuiz();
  })
);

function loadQuestion() {
  questionArea.innerHTML = "";
  questionArea.innerHTML = allQuestions[random][current];
  // quiz.appendChild(questionArea);
}

function loadAnswers() {
  var answers = allAnswers[random][current];
  answerArea.innerHTML = "";
  // quiz.appendChild(answerArea);
  for (var i = 0; i < answers.length; i++) {
    (function (i) {
      var createDiv = document.createElement("div"),
        text = document.createTextNode(allAnswers[random][current][i]);
      createDiv.appendChild(text);
      createDiv.addEventListener(
        "click",
        function () {
          logAnswer(i);
        },
        false
      );
      answerArea.appendChild(createDiv);
    })(i);
  }
}

function logAnswer(i) {
  var choice = houseType[random][current][i];
  switch (choice) {
    case "h":
      answerArr[0] += 1;
      break;
    case "g":
      answerArr[1] += 1;
      break;
    case "r":
      answerArr[2] += 1;
      break;
    case "s":
      answerArr[3] += 1;
      break;
    default:
      break;
  }

  if (current < allQuestions[random].length - 1) {
    current += 1;
    progressQuiz();
  } else {
    //current = 0;
    var result = document.getElementById("result");
    var h2 = document.createElement("h2");
    var text = addAnswers();
    result.style.color = "black";
    result.style.height = "60vh";
    result.style.paddingTop = "10vh";
    result.style.paddingBottom = "10vh";
    h2.innerHTML = "Congratulations!!! You are " + text + "!!!" + "<br/><br/>";
    result.appendChild(h2);
    answerArea.innerHTML = " ";
    questionArea.innerHTML = " ";
    var a = document.createElement("a");
    a.href = "/";
    result.appendChild(a);
    var btn = document.createElement("button");
    btn.innerHTML = "Procastinate more";
    a.appendChild(btn);
  }
}

function addAnswers() {
  var max = 0;
  var maxIndex;
  for (var i = 0; i < 4; i++) {
    if (answerArr[i] >= max) {
      maxIndex = i;
      max = answerArr[i];
    }
  }

  switch (maxIndex) {
    case 0:
      result.style.backgroundColor = "#f688bb";
      return finalResult[random][0];
    case 1:
      result.style.backgroundColor = "#e8f9e9";
      return finalResult[random][1];
    case 2:
      result.style.backgroundColor = "#baf1a1";
      return finalResult[random][2];
    case 3:
      result.style.backgroundColor = "#9de3d0";
      return finalResult[random][3];
  }
}

function progressQuiz() {
  heading.innerHTML = " ";
  questionArea.innerHTML = " ";
  loadQuestion();
  loadAnswers();
}
