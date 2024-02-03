let choice = ["rock", "paper", "scissor"];

// function to have the computer make a guess
function getComputerChoice() {
  return choice[Math.floor(Math.random() * choice.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  let result;
  if (playerSelection == computerSelection) {
    result = "It's a tie!";
  } else if (
    (playerSelection == "scissor" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "scissor")
  ) {
    result = "You win!";
    playerScore++;
  } else {
    result = "You lose!";
    computerScore++;
  }
  return result;
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("What do you choose?: ").toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }

  console.log(
    `Your score is: ${playerScore} and Computer's score is: ${computerScore}`
  );

  if (playerScore > computerScore) {
    console.log("You're the winner!");
  } else if (computerScore > playerScore) {
    console.log("You're the loser!");
  } else {
    console.log("This game is a tie!");
  }
}

game();
