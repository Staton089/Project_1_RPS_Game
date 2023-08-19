// Get a reference to the blinking button
var startButton = document.querySelector('.start-button'); // Selects the button with class "start-button"
var playerNameInput = document.getElementById("playerNameInput"); // Gets an input element with ID "playerNameInput"
var playerEl = document.getElementById("playerEl"); // Gets an element with ID "playerEl"

// Define the colors for the blinking effect
const colors = ['#17176e', '#bf17a0']; // Two colors: dark blue and light blue
const fontColors = ['white', 'black']; // Two font colors: white and black

// Set up a variable to track the blinking state
let blinking = false;

// Function to toggle the blinking effect
function toggleBlink() {
  blinking = !blinking; // Toggle the blinking state
  const color = blinking ? colors[1] : colors[0]; // Choose the background color based on the blinking state
  const fontColor = blinking ? fontColors[1] : fontColors[0]; // Choose the font color based on the blinking state
  
  startButton.style.backgroundColor = color; // Apply the selected background color to the button
  startButton.style.color = fontColor; // Apply the selected font color to the button
}

// Start blinking when the page is loaded
setInterval(toggleBlink, 1000); // Toggle the blinking effect every 1000 milliseconds (1 second)
