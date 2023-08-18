// The Choices - an array containing rock, paper, and scissors options
var rockPaperScissorsChoices = ["rock", "paper", "scissors"];

// Variables for different choices
var Rock = "rock"; // Variable for "rock" choice
var Paper = "paper"; // Variable for "paper" choice
var Scissors = "scissors"; // Variable for "scissors" choice

// Buttons - getting elements by their IDs
var rockEl = document.getElementById("rockEl"); // Get the element with ID "rockEl"
var paperEl = document.getElementById("paperEl"); // Get the element with ID "paperEl"
var scissorsEl = document.getElementById("scissorsEl"); // Get the element with ID "scissorsEl"
var playerEl = document.getElementById("playerEl");
var playerNameInput = document.getElementById("playerNameInput");


//Player  ---
// Declare a variable to store the choice
var player;

// Click Function for Buttons
// Add a click event listener to rockEl
rockEl.addEventListener("click", function () {
  // Set the playerChoice variable to "rock"
  player = "rock";
  // Log the player's choice to the console
  console.log(player);
  // Call the game function after the player makes a choice
  rpsGame();
});
// Add a click event listener to rockEl
paperEl.addEventListener("click", function () {
  // Set the playerChoice variable to "rock"
  player = "paper";
  // Log the player's choice to the console
  console.log(player);
  // Call the game function after the player makes a choice
  rpsGame();
});
// Add a click event listener to rockEl
scissorsEl.addEventListener("click", function () {
  // Set the playerChoice variable to "rock"
  player = "scissors";
  // Log the player's choice to the console
  console.log(player);
  // Call the game function after the player makes a choice
  rpsGame();
});

// ROCK PAPER SCISSORS Game function
function rpsGame() {
  //CPU ---
  // CPU's Random Choice - randomly selects an option from the rockPaperScissors array
  var cpuRandomChoice = rockPaperScissorsChoices[Math.floor(Math.random() * rockPaperScissorsChoices.length)];
  // Check for different outcomes and show alerts accordingly
  if (player === cpuRandomChoice) {
    alert("You Tie! Sorry"); // Alert when player's choice matches CPU's choice
  } else if (player === "rock" && cpuRandomChoice === "scissors") {
    alert("You Won! Nice"); // Alert when player's rock beats CPU's scissors
  } else if (player === "paper" && cpuRandomChoice === "rock") {
    alert("You Won! Great Job"); // Alert when player's paper beats CPU's rock
  } else if (player === "scissors" && cpuRandomChoice === "paper") {
    alert("You Won! Great"); // Alert when player's scissors beats CPU's paper
  } else if (cpuRandomChoice === "rock" && player === "scissors") {
    alert("You lose! That sucks"); // Alert when CPU's rock beats player's scissors
  } else if (cpuRandomChoice === "paper" && player === "rock") {
    alert("You lose! Damn Try again"); // Alert when CPU's paper beats player's rock
  } else if (cpuRandomChoice === "scissors" && player === "paper") {
    alert("You lose! Better luck next time"); // Alert when CPU's scissors beats player's paper
  }
}
