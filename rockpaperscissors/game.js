let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'Haha You lose 😊';                // computer wins (smiling with blush)
    } else if (computerMove === 'paper') {
      result = 'I let you win that one 🙄';       // you win, rolling eyes emoji
    } else if (computerMove === 'scissors') {
      result = 'One more 😐';                      // tie, straight face emoji
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'Oh man. You win 🙄';               // you win, rolling eyes emoji (as above)
    } else if (computerMove === 'paper') {
      result = 'Dont copy me 😐';                   // tie, straight face emoji
    } else if (computerMove === 'scissors') {
      result = 'Haha sucker! 😊';                    // computer wins, smiling with blush
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'One more 😐';                       // tie, straight face emoji
    } else if (computerMove === 'paper') {
      result = 'You lose! 😊';                       // computer wins, smiling with blush
    } else if (computerMove === 'scissors') {
      result = 'You cheated 🙄';                     // you cheated, rolling eyes emoji
    }
  }

  // Update the score based on result message
  if (result.includes('I let you win that one') || result.includes('Oh man. You win')) {
    score.wins += 1;  // Player wins
  } else if (result.includes('Haha You lose') || result.includes('Haha sucker!') || result.includes('You lose!')) {
    score.losses += 1;  // Computer wins
  } else if (result.includes('One more') || result.includes('Dont copy me')) {
    score.ties += 1;   // Tie
  } else if (result.includes('You cheated')) {
    score.ties += 1;   // Tie (rolling eyes for cheating)
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
