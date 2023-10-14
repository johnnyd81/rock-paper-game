//DOM variables
const computerChoiceDisplay = document.getElementById("computer_choice");
const userChoiceDisplay = document.getElementById("your_choice");
const result = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let score = document.querySelector("#score");
//create user and computer variables
let userChoice;
let computerChoice;
let finalResult;
let total = 0;

possibleChoices.forEach((choice) => {
  choice.addEventListener("click", function (e) {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  });
});

//generates a random number in a range
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateComputerChoice() {
  const randomNumber = getRandom(1, 3);
//the random number decides whether rock, paper or scissors is chosen
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else if (randomNumber === 3) {
    computerChoice = "scissors";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

//each combination is calculated to render the correct output
function getResult() {
  if (computerChoice === userChoice) {
    finalResult = "It's a draw";
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    finalResult = "You lose";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    finalResult = "You win";
    total += 1;
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    finalResult = "You win";
    total += 1;
  } else if (computerChoice === "paper" && userChoice === "rock") {
    finalResult = "You lose";
  } else if (computerChoice === "scissors" && userChoice === "paper") {
    finalResult = "You lose";
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    finalResult = "You win";
    total += 1;
  }

  result.innerHTML = finalResult;
  score.textContent = total;
}
