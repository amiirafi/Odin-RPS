let choice = ["rock", "paper", "scissor"];

function getComputerChoice() {
  return choice[Math.floor(Math.random() * choice.length)];
}

let playerSelection;

let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const result = document.querySelector(".result");

rock.addEventListener("click", () => {
  playerSelection = rock.className;
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

paper.addEventListener("click", () => {
  playerSelection = paper.className;
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

scissor.addEventListener("click", () => {
  playerSelection = scissor.className;
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

function playRound(playerSelection, computerSelection) {
  let outcome;
  if (playerSelection == computerSelection) {
    outcome = "It's a tie!";
  } else if (
    (playerSelection == "scissor" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "scissor")
  ) {
    outcome = "You win!";
    playerScore++;
  } else {
    outcome = "You lose!";
    computerScore++;
  }
  result.textContent = `${outcome} Your score is: ${playerScore} and Computer's score is: ${computerScore}`;

  if (playerScore == 5) {
    result.textContent = "You're the winner!";
    playerScore = 0;
    computerScore = 0;
    return;
  } else if (computerScore == 5) {
    result.textContent = "You're the loser!";
    playerScore = 0;
    computerScore = 0;
    return;
  }
}
