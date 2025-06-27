let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'Haha You lose';
    } else if (computerMove === 'paper') {
      result = 'I let you win that one';
    } else if (computerMove === 'scissors') {
      result = 'One more';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'Oh man. You win';
    } else if (computerMove === 'paper') {
      result = 'Dont copy me';
    } else if (computerMove === 'scissors') {
      result = 'Haha sucker!';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'One more';
    } else if (computerMove === 'paper') {
      result = 'You lose!';
    } else if (computerMove === 'scissors') {
      result = 'You cheated';
    }
  }

  if (result === 'I let you win that one') {
    score.wins += 1;
  } else if (result === 'Haha You lose') {
    score.losses += 1;
  } else if (result === 'One more') {
    score.ties += 1;
  }
  
   if (result === 'Oh man. You win') {
    score.wins += 1;
  } else if (result === 'Haha sucker!') {
    score.losses += 1;
  } else if (result === 'Dont copy me') {
    score.ties += 1;
  }
  
 if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose!') {
    score.losses += 1;
  } else if (result === 'You cheated') {
    score.ties += 1;
  }


  localStorage.setItem('score', JSON.stringify(score));

  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}
