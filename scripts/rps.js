// The Odin Project: Rock Paper Scissors JavaScript Game

// Randomly generate a number within the length of the choices choices array
// and return the value from the randomly generated index of the choices array.
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let computerChoice = Math.floor(Math.random()*choices.length);
  return choices[computerChoice];
}


// Get player choice
function getPlayerChoice() {
  let playerChoice = (prompt("Enter your choice: ")).toLowerCase();
  if( (playerChoice == "rock") || (playerChoice == "paper") || (playerChoice == "scissors")){
    return playerChoice;
  } else { 
    alert("Invalid Input! Please enter Rock, Paper, or Scissors"); 
    getPlayerChoice();
  }
}

console.log(getComputerChoice());
getPlayerChoice();
// Get user choice
// Compare and decide winner  
