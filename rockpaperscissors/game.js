let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

function updateScoreElement() {
  document.querySelector('.js-score').textContent =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function updateMovesAndResult(playerMove, computerMove, result) {
  document.querySelector('.js-moves').textContent =
    `You picked ${playerMove}. Computer picked ${computerMove}.`;
  document.querySelector('.js-result').textContent = result;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === computerMove) {
    result = 'It’s a tie 😐';
    score.ties++;
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    result = 'You win! 🙌';
    score.wins++;
  } else {
    result = 'You lose 😢';
    score.losses++;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  updateMovesAndResult(playerMove, computerMove, result);
}

function pickComputerMove() {
  const moves = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return moves[randomIndex];
}

function resetScore() {
  score = { wins: 0, losses: 0, ties: 0 };
  localStorage.removeItem('score');
  updateScoreElement();
  document.querySelector('.js-moves').textContent = '';
  document.querySelector('.js-result').textContent = '';
}

window.onload = () => {
  updateScoreElement();
};
