// Get a reference to the blinking button
const startButton = document.querySelector('.start-button');

// Define the colors for the blinking effect
const colors = ['#0C356A', '#40F8FF'];

// Set up a variable to track the blinking state
let blinking = false;

// Function to toggle the blinking effect
function toggleBlink() {
  blinking = !blinking;
  const color = blinking ? colors[1] : colors[0];
  startButton.style.backgroundColor = color;
}

// Start blinking when the page is loaded
setInterval(toggleBlink, 1000);
