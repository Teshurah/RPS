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
    } else if (computerMove === 'scissors') {
      result = 'One more 😐';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'Oh man. You win 🙄';
    } else if (computerMove === 'paper') {
      result = 'Dont copy me 😐';
    } else if (computerMove === 'scissors') {
      result = 'Haha sucker! 😊';
    }

  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'One more 😐';
    } else if (computerMove === 'paper') {
      result = 'You lose! 😊';
    } else if (computerMove === 'scissors') {
      result = 'You cheated 🙄';
    }
  }

  // Update score based on result
  if (result === 'I let you win that one 🙄' || result === 'Oh man. You win 🙄') {
    score.wins += 1;
  } else if (result === 'Haha You lose 😊' || result === 'Haha sucker! 😊' || result === 'You lose! 😊') {
    score.losses += 1;
  } else if (result === 'One more 😐' || result === 'Dont copy me 😐') {
    score.ties += 1;
  } else if (result === 'You cheated 🙄') {
    score.ties += 1;
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
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}
