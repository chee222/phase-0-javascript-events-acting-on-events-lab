// Get the dodger element
const dodger = document.getElementById('dodger');

// Function to move the dodger to the left
function moveDodgerLeft() {
  const currentLeft = parseInt(dodger.style.left);
  if (currentLeft > 0) {
    dodger.style.left = (currentLeft - 10) + 'px';
  }
}

// Function to move the dodger to the right
function moveDodgerRight() {
  const currentLeft = parseInt(dodger.style.left);
  if (currentLeft < 360) {
    dodger.style.left = (currentLeft + 10) + 'px';
  }
}

// Event listener for key presses
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (event.key === 'ArrowRight') {
    moveDodgerRight();
  }
});