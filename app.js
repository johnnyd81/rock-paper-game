//DOM variables needed for the application to be interactive i.e. for button clicks and displaying the results of the game
const computerChoiceDisplay = document.getElementById("computer_choice");
const userChoiceDisplay = document.getElementById("your_choice");
const result = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let score = document.querySelector("#score");

//create user and computer variables to compare the choices and decide the outcome
let userChoice;
let computerChoice;
let finalResult;
let total = 0;

//add a click event to each of the choice buttons by using a foreach loop
possibleChoices.forEach((choice) => {
  choice.addEventListener("click", function (e) {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();//call the function to generate a random choice
    getResult();
  });
});

//generates a random number in a specific number range like from 0 to 20 using the Math.random method
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateComputerChoice() {
  //calls the getRandom function with a number range of 1 to 3 that represents the three choices
  const randomNumber = getRandom(1, 3);
//the random number decides whether rock, paper or scissors is chosen and refers to the three available choices
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else if (randomNumber === 3) {
    computerChoice = "scissors";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

//each combination is calculated to render the correct output onscreen
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
