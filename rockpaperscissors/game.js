let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
  let outcome = ''; // win, lose, tie

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'One more';
      outcome = 'tie';
    } else if (computerMove === 'paper') {
      result = 'You lose!';
      outcome = 'lose';
    } else {
      result = 'You cheated';
      outcome = 'win';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'Oh man. You win';
      outcome = 'win';
    } else if (computerMove === 'paper') {
      result = 'Don’t copy me';
      outcome = 'tie';
    } else {
      result = 'Haha sucker!';
      outcome = 'lose';
    }
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'Haha You lose';
      outcome = 'lose';
    } else if (computerMove === 'paper') {
      result = 'I let you win that one';
      outcome = 'win';
    } else {
      result = 'One more';
      outcome = 'tie';
    }
  }

  // Update score
  if (outcome === 'win') {
    score.wins += 1;
  } else if (outcome === 'lose') {
    score.losses += 1;
  } else if (outcome === 'tie') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
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
