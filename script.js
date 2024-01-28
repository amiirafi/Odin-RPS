let choice = ["rock", "paper", "scissor"];

// function to have the computer make a guess
function getComputerChoice() {
  return choice[Math.floor(Math.random() * choice.length)];
}

let playerSelection = prompt("What do you choose?: ").toLowerCase();
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissor") {
    return "You win! Rock beats Scissor.";
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    return "You lose! Rock beats Scissor. ";
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    return "You win! Scissor beats Paper.";
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    return "You lose! Scissor beats Paper.";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win! Paper beats Rock.";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose! Paper bears Rock";
  } else {
    return "Please choose beetween Rock, Paper or Scissor";
  }
}
