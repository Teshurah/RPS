// Initialize score
let score = {
  wins: 0,
  losses: 0,
  ties: 0
};

// Update score display elements on the page
function updateScoreElement() {
  document.querySelector('.js-score').textContent =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// Update moves and result display elements on the page
function updateMovesAndResult(playerMove, computerMove, result) {
  document.querySelector('.js-moves').textContent =
    `You picked ${playerMove}. Computer picked ${computerMove}.`;
  document.querySelector('.js-result').textContent = result;
}

// The main game function called by button clicks
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = determineResult(playerMove, computerMove);

  // Update scores based on result
  updateScore(result);

  // Update UI
  updateScoreElement();
  updateMovesAndResult(playerMove, computerMove, result);
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
    score.wins += 1;
  } else if (result.includes('lose')) {
    score.losses += 1;
  } else {
    score.ties += 1;
  }
}

// Pick a random move for the computer
function pickComputerMove() {
  const moves = ['rock', 'paper', 'scissors'];
  return moves[Math.floor(Math.random() * moves.length)];
}

// Reset the score and text
function resetGame() {
  score = { wins: 0, losses: 0, ties: 0 }; // Reset score
  document.querySelector('.js-score').textContent = ''; // Clear score display
  document.querySelector('.js-moves').textContent = ''; // Clear moves display
  document.querySelector('.js-result').textContent = ''; // Clear result display
}

// When the page loads, reset the game
window.onload = () => {
  resetGame(); // Reset game on page load
};

// Attach reset function to the reset button
document.querySelector('.reset-score-button').onclick = resetGame;
