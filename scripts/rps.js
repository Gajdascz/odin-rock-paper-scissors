// The Odin Project: Rock Paper Scissors JavaScript Game


const choices = ["rock", "paper", "scissors"]; // Set choices constant as there's only ever three options

// Randomly generate a number within the length of the choices choices array
// and return the value from the randomly generated index of the choices array.
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random()*choices.length);
  return choices[computerChoice];
}
console.log(getComputerChoice());
// Get user choice
// Compare and decide winner  
