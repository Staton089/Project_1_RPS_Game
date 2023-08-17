// Get a reference to the blinking button
const startButton = document.querySelector('.start-button');

// Define the colors for the blinking effect
const colors = ['#0C356A', '#40F8FF'];

// Set up a variable to track the blinking state
let blinking = false;

// Function to toggle the blinking effect
function toggleBlink() {
  blinking = !blinking; // Toggle the blinking state
  const color = blinking ? colors[1] : colors[0]; // Choose the color based on the blinking state
  startButton.style.backgroundColor = color; // Apply the selected color to the button's background
}

// Start blinking when the page is loaded
setInterval(toggleBlink, 1000); // Toggle the blinking effect every 1000 milliseconds (1 second)
