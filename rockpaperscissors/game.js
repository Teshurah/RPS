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
      result = 'Haha You lose 😊';                // computer wins
    } else if (computerMove === 'paper') {
      result = 'I let you win that one 🙄';       // player wins
    } else if (computerMove === 'scissors') {
      result = 'One more 😐';                      // tie
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'Oh man. You win 🙄';               // player wins
    } else if (computerMove === 'paper') {
      result = 'Dont copy me 😐';                   // tie
    } else if (computerMove === 'scissors') {
      result = 'Haha sucker! 😊';                    // computer wins
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'One more 😐';                       // tie
    } else if (computerMove === 'paper') {
      result = 'You lose! 😊';                       // computer wins
    } else if (computerMove === 'scissors') {
      result = 'You cheated 🙄';                     // player cheated
    }
  }

  if (result.includes('I let you win that one') || result.includes('Oh man. You win')) {
    score.wins += 1;
  } else if (result.includes('Haha You lose') || result.includes('Haha sucker!') || result.includes('You lose!')) {
    score.losses += 1;
  } else if (result.includes('One more') || result.includes('Dont copy me')) {
    score.ties += 1;
  } else if (result.includes('You cheated')) {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  updateMovesAndResult(playerMove, computerMove, result);
}

// Random computer move picker
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

window.onload = () => {
  updateScoreElement();
};
