// The Choices - an array containing rock, paper, and scissors options
var rockPaperScissorsChoices = ["rock", "paper", "scissors"];

// Player choice
var player;

// Get elements by their IDs
var startButton = document.getElementById("startButton");
var rockEl = document.getElementById("rockEl");
var paperEl = document.getElementById("paperEl");
var scissorsEl = document.getElementById("scissorsEl");
var playerScoreEl = document.getElementById("playerScore"); // Corrected ID
var cpuScoreEl = document.getElementById("cpuScore"); // Corrected ID
var resetButton = document.getElementById("resetButton");

// Get other elements by their tags
var h1Tags = document.getElementsByTagName("h1");
var h1El = h1Tags[0];
var h2Tags = document.getElementsByTagName("h2");
var h2El = h2Tags[0];
var divTags = document.getElementsByTagName("div");

// Initialize player and CPU scores from local storage or default to 0
var playerScore = parseInt(localStorage.getItem("playerScore")) || 0;
var cpuScore = parseInt(localStorage.getItem("cpuScore")) || 0;

// Click event for the start button
startButton.addEventListener("click", function () {
  // When the "start" button is clicked, perform the following actions:

  // Clear the text content of the <h1> element
  h1El.textContent = "";

  // Clear the text content of the <h2> element
  h2El.textContent = "";

  // Hide the "start" button by changing its display style to "none"
  startButton.style.display = "none";

  // Enable the choice buttons
  rockEl.disabled = false;
  paperEl.disabled = false;
  scissorsEl.disabled = false;

  // Remove the "hide" class from the second div element
  divTags[1].classList.remove("hide");
  divTags[0].classList.remove("startBtnContainer");

  // Update the score displays
  updateScoreDisplays();
});

// Click events for rock, paper, and scissors buttons
rockEl.addEventListener("click", function () {
  player = "rock";
  rpsGame();
});

paperEl.addEventListener("click", function () {
  player = "paper";
  rpsGame();
});

scissorsEl.addEventListener("click", function () {
  player = "scissors";
  rpsGame();
});

// ROCK PAPER SCISSORS Game function
function rpsGame() {
  // CPU's Random Choice - randomly selects an option from the rockPaperScissors array
  var cpuRandomChoice =
    rockPaperScissorsChoices[
      Math.floor(Math.random() * rockPaperScissorsChoices.length)
    ];
  // Check for different outcomes and show alerts accordingly
  if (player === cpuRandomChoice) {
    alert("You Tie! Sorry"); // Alert when player's choice matches CPU's choice
  } else if (player === "rock" && cpuRandomChoice === "scissors") {
    alert("You Won! Nice"); // Alert when player's rock beats CPU's scissors
    playerScore++;
  } else if (player === "paper" && cpuRandomChoice === "rock") {
    alert("You Won! Great Job"); // Alert when player's paper beats CPU's rock
    playerScore++;
  } else if (player === "scissors" && cpuRandomChoice === "paper") {
    alert("You Won! Great"); // Alert when player's scissors beats CPU's paper
    playerScore++;
  } else if (cpuRandomChoice === "rock" && player === "scissors") {
    alert("You lose! That sucks"); // Alert when CPU's rock beats player's scissors
    cpuScore++;
  } else if (cpuRandomChoice === "paper" && player === "rock") {
    alert("You lose! Damn Try again"); // Alert when CPU's paper beats player's rock
    cpuScore++;
  } else if (cpuRandomChoice === "scissors" && player === "paper") {
    alert("You lose! Better luck next time"); // Alert when CPU's scissors beats player's paper
    cpuScore++;
  }
  // Update the score displays
  updateScoreDisplays();
   
  // Save scores to local storage
  localStorage.setItem("playerScore", playerScore);
  localStorage.setItem("cpuScore", cpuScore);
}

// Function to update the score displays
function updateScoreDisplays() {
  playerScoreEl.textContent = `Player Score: ${playerScore}`;
  cpuScoreEl.textContent = `CPU Score: ${cpuScore}`;
}

// Reset button click event
resetButton.addEventListener("click", function () {
  // Reset player and CPU scores to zero
  playerScore = 0;
  cpuScore = 0;
  
  // Update the score displays
  updateScoreDisplays();

  // Clear local storage for scores
  localStorage.removeItem("playerScore");
  localStorage.removeItem("cpuScore");
});
