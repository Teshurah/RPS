let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'Haha You lose 😊';
    } else if (computerMove === 'paper') {
      result = 'I let you win that one 🙄';
    } else {
      result = 'One more 😐';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'Oh man. You win 🙄';
    } else if (computerMove === 'paper') {
      result = 'Dont copy me 😐';
    } else {
      result = 'Haha sucker! 😊';
    }

  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'One more 😐';
    } else if (computerMove === 'paper') {
      result = 'You lose! 😊';
    } else {
      result = 'You cheated 🙄';
    }
  }

  // Update score
  if (result.includes('You win') || result.includes('I let you win')) {
    score.wins++;
  } else if (result.includes('You lose') || result.includes('sucker')) {
    score.losses++;
  } else {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  alert(`You picked ${playerMove}.\nComputer picked ${computerMove}.\n\n${result}\n\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
  updateScoreElement();
}

function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return 'rock';
  } else if (randomNumber < 2 / 3) {
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
