// The Odin Project: Rock Paper Scissors JavaScript Game

// Randomly generate a number within the length of the choices choices array
// and return the value from the randomly generated index of the choices array.
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let computerChoice = Math.floor(Math.random()*choices.length);
  return choices[computerChoice];
}

// get playerChoice from UI button selection and calls playRound()
const playerChoiceButtons = document.querySelectorAll(`.player-button-container > button`);
playerChoiceButtons.forEach((button) => {
  button.addEventListener(`click`, () => {
    playRound(button.value);
  });
});


// Compare computer and player choice and return the result
function choiceCompare(playerChoice, computerChoice) {
  if(playerChoice == computerChoice){
    return `It's a Tie! You Both Chose ${playerChoice}`; } 
    else if (
      (playerChoice == "rock" && computerChoice == "scissors") ||
      (playerChoice == "paper" && computerChoice == "rock") ||
      (playerChoice == "scissors" && computerChoice == "paper")
    ) { return `You Win! ${playerChoice} beats ${computerChoice}`; }
    else if (
      (computerChoice == "rock" && playerChoice == "scissors") ||
      (computerChoice == "paper" && playerChoice == "rock") ||
      (computerChoice == "scissors" && playerChoice == "paper")
    ) {return `You Lose! ${computerChoice} beats ${playerChoice}`;}
    else { console.log("ERROR! Something wrong in choiceCompare() logic");}
}

// get and return round result
function playRound(playerChoice) {
  let computerChoice = getComputerChoice();
  let roundResult = choiceCompare(playerChoice, computerChoice);
  const roundResultContainer = document.querySelector(`.round-results-container`);
  const roundResultString = document.createElement(`div`);
  roundResultString.textContent = roundResult;
  roundResultContainer.appendChild(roundResultString);
  console.log(roundResult);
  return roundResult;
}

// Play a 5 round game that keeps score and reports a winner or loser at the end
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let tiedRounds = 0;
  let round = 1;
  while(round <= 5) {
    let roundResult = playRound();
    if(roundResult.includes("You Win!")) {
      playerScore++;
      round++;
    } else if (roundResult.includes("You Lose!")) {
      computerScore++;
      round++;
    } else {
      tiedRounds++;
    }
  }
  if(playerScore > computerScore) {
    console.log(`Player Wins!\nPlayer Score: ${playerScore} Computer Score: ${computerScore} Tied Rounds: ${tiedRounds}`);
  } else {
    console.log(`Computer Wins!\nPlayer Score: ${playerScore} Computer Score: ${computerScore} Tied Rounds: ${tiedRounds}`);
  }
}


//game();