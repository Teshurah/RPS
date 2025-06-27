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
// Reset the score
function resetScore() {
  score = { wins: 0, losses: 0, ties: 0 };
  localStorage.removeItem('score');
  updateScoreElement();
}
// When the page loads, update the score display
window.onload = () => {
  updateScoreElement();
};
