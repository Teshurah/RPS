// Retrieve or initialize score from localStorage
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
      result = 'Don’t copy me 😐';
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

  if (result.includes('let you win') || result.includes('You win')) {
    score.wins++;
  } else if (result.includes('lose') || result.includes('sucker')) {
    score.losses++;
  } else {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  updateMovesAndResult(playerMove, computerMove, result);
}

function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1/3) return 'rock';
  if (randomNumber < 2/3) return 'paper';
  return 'scissors';
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
