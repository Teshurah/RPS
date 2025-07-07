let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreDisplay();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === computerMove) {
    result = 'It\'s a tie!';
    score.ties++;
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    result = 'You win!';
    score.wins++;
  } else {
    result = 'You lose!';
    score.losses++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  document.getElementById('result-text').textContent = 
    `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`;

  updateScoreDisplay();
}

function pickComputerMove() {
  const moves = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

function updateScoreDisplay() {
  document.getElementById('score').textContent = 
    `Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}`;
}

function resetScore() {
  score = { wins: 0, losses: 0, ties: 0 };
  localStorage.removeItem('score');
  updateScoreDisplay();
  document.getElementById('result-text').textContent = 'Make your move!';
}
