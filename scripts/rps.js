// The Odin Project: Rock Paper Scissors JavaScript Game

// Randomly generate a number within the length of the choices choices array
// and return the value from the randomly generated index of the choices array.
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let computerChoice = Math.floor(Math.random()*choices.length);
  return choices[computerChoice];
}


// Get, validate, and return player choice 
function getPlayerChoice() {
  let playerChoice = (prompt("Enter your choice: ")).toLowerCase();
  if( (playerChoice == "rock") || (playerChoice == "paper") || (playerChoice == "scissors")){
    return playerChoice;
  } else { 
    alert("Invalid Input! Please enter Rock, Paper, or Scissors"); 
    getPlayerChoice();
  }
}

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
      (playerChoice == "rock" && computerChoice == "paper") ||
      (playerChoice == "paper" && computerChoice == "scissors") ||
      (playerChoice == "scissors" && computerChoice == "rock")
    ) {return `You Lose! ${computerChoice} beats ${playerChoice}`;}
    else { console.log("ERROR! Something wrong in choiceCompare2 logic");}
}


function playRound() {
  let playerChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();
  let roundResult = choiceCompare(playerChoice, computerChoice)
  console.log(roundResult);
}

playRound();
// Compare and decide winner  
