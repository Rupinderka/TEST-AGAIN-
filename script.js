// Initialize counts
let likeCount = 0;
let dislikeCount = 0;

// Select elements
const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');
const likeDisplay = document.getElementById('likeCount');
const dislikeDisplay = document.getElementById('dislikeCount');

// Add event listeners for buttons
likeBtn.addEventListener('click', () => {
  likeCount++;
  likeDisplay.textContent = likeCount;
});

dislikeBtn.addEventListener('click', () => {
  dislikeCount++;
  dislikeDisplay.textContent = dislikeCount;
});
