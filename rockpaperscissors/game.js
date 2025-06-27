let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === computerMove) {
    result = "It's a tie 😐";
    score.ties++;
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    result = 'I let you win🙄';
    score.wins++;
  } else {
    result = 'Haha i win😊';
    score.losses++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  alert(`You picked ${playerMove}.\nComputer picked ${computerMove}.\n\n${result}\n\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);

  updateScoreElement();
}

function pickComputerMove() {
  const random = Math.random();
  if (random < 1 / 3) {
    return 'rock';
  } else if (random < 2 / 3) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function updateScoreElement() {
  document.getElementById('score-text').textContent =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function resetScore() {
  score = { wins: 0, losses: 0, ties: 0 };
  localStorage.removeItem('score');
  updateScoreElement();
}
