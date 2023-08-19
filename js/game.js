// The Choices - an array containing rock, paper, and scissors options
var rockPaperScissorsChoices = ["rock", "paper", "scissors"];
//Player  ---
// Declare a variable to store the choice
var player;

// Buttons - getting elements by their IDs
// Get elements by their IDs
var startButton = document.getElementById("startButton");
var gameSection = document.getElementById("gameSection");
var rockEl = document.getElementById("rockEl");
var paperEl = document.getElementById("paperEl");
var scissorsEl = document.getElementById("scissorsEl");
var playerEl = document.getElementById("playerEl");
var h1Tags = document.getElementsByTagName("h1");
var h1El = h1Tags[0];
var h2Tags = document.getElementsByTagName("h2");
var h2El = h2Tags[0];
var divTags = document.getElementsByTagName("div");

// Click event for the start button
startButton.addEventListener("click", function () {
  // When the "start" button is clicked, perform the following actions:

  // Clear the text content of the <h1> element
  h1El.textContent = "";

  // Clear the text content of the <h2> element
  h2El.textContent = "";

  // Hide the "start" button by changing its display style to "none"
  startButton.style.display = "none";

  // Remove the "hide" class from the second div element
  divTags[1].classList.remove("hide");

  //timer
  var timeEl = document.getElementById("time");
  var time = 0;
  function updateTimer(){
    timeEl.textContent = `Timer: ${time}`; // Update the timeEl with the new time
    time++;
  }
  const timerInterval = setInterval(updateTimer, 1000);


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
  //CPU ---
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
