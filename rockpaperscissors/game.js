// Constants for game moves
const MOVES = ['rock', 'paper', 'scissors'];

// Initialize score
let score = {
  wins: 0,
  losses: 0,
  ties: 0
};

// Update score display elements on the page
function updateScoreDisplay() {
  document.querySelector('.js-score').textContent = 
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// Update moves and result display elements on the page
function updateGameDisplay(playerMove, computerMove, result) {
  document.querySelector('.js-moves').textContent = 
    `You picked ${playerMove}. Computer picked ${computerMove}.`;
  document.querySelector('.js-result').textContent = result;
}

// Main game function called by button clicks
function playGame(playerMove) {
  const computerMove = pickRandomMove();
  const result = determineResult(playerMove, computerMove);

  // Update scores based on result
  updateScore(result);

  // Update UI
  updateScoreDisplay();
  updateGameDisplay(playerMove, computerMove, result);
}

// Determine the result of the game
function determineResult(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return 'It\'s a tie! 😐';
  }
  if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    return 'You win! 🎉';
  }
  return 'You lose! 😢';
}

// Update score based on the result
function updateScore(result) {
  if (result.includes('win')) {
    score.wins++;
  } else if (result.includes('lose')) {
    score.losses++;
  } else {
    score.ties++;
  }
}

// Pick a random move for the computer
function pickRandomMove() {
  return MOVES[Math.floor(Math.random() * MOVES.length)];
}

// Reset the game
function resetGame() {
  score = { wins: 0, losses: 0, ties: 0 }; // Reset score
  document.querySelector('.js-score').textContent = ''; // Clear score display
  document.querySelector('.js-moves').textContent = ''; // Clear moves display
  document.querySelector('.js-result').textContent = ''; // Clear result display
  updateScoreDisplay(); // Update score display after reset
}

// Initialize event listeners
function initializeEventListeners() {
  document.querySelectorAll('.move-button').forEach(button => {
    button.addEventListener('click', () => {
      const playerMove = button.querySelector('img').alt.toLowerCase();
      playGame(playerMove);
    });
  });

  document.querySelector('.reset-score-button').addEventListener('click', resetGame);
}

// When the page loads, reset the game and initialize event listeners
window.onload = () => {
  resetGame(); // Reset game on page load
  initializeEventListeners(); // Set up event listeners
};
