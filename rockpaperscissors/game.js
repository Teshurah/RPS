   // Retrieve or initialize score from localStorage
   let score = JSON.parse(localStorage.getItem('score')) || {
     wins: 0,
     losses: 0,
     ties: 0
   };

   // Update score display elements on the page
   function updateScoreElement() {
     document.querySelector('.js-score').textContent =
       `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
   }

   // Update moves and result display elements on the page
   function updateMovesAndResult(playerMove, computerMove, result) {
     document.querySelector('.js-moves').textContent =
       `You picked ${playerMove}. Computer picked ${computerMove}.`;
     document.querySelector('.js-result').textContent = result;
   }

   // The main game function called by button clicks
   function playGame(playerMove) {
     const computerMove = pickComputerMove();
     let result = determineResult(playerMove, computerMove);

     // Update scores based on result
     updateScore(result);

     // Save score and update UI
     localStorage.setItem('score', JSON.stringify(score));
     updateScoreElement();
     updateMovesAndResult(playerMove, computerMove, result);
   }

   // Determine the result of the game
   function determineResult(playerMove, computerMove) {
     if (playerMove === computerMove) {
       return 'It\'s a tie! 😐';
     }
     if (
       (playerMove === 'rock' && computerMove === 'scissors') ||
       (playerMove === 'paper' && computerMove === 'rock') ||
       (playerMove === 'scissors' && computerMove === 'paper')
     ) {
       return 'You win! 🎉';
     }
     return 'You lose! 😢';
   }

   // Update score based on the result
   function updateScore(result) {
     if (result.includes('win')) {
       score.wins += 1;
     } else if (result.includes('lose')) {
       score.losses += 1;
     } else {
       score.ties += 1;
     }
   }

   // Pick a random move for the computer
   function pickComputerMove() {
     const moves = ['rock', 'paper', 'scissors'];
     return moves[Math.floor(Math.random() * moves.length)];
   }

   // Reset the score
   function resetScore() {
     score = { wins: 0, losses: 0, ties: 0 };
     localStorage.removeItem('score');
     updateScoreElement();
   }

   // When the page loads, update the score display
   window.onload = () => {
     updateScoreElement();
   };
   
