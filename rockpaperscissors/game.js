let wins = 0;
let losses = 0;
let ties = 0;

function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let resultTitle = "";
  let resultMessage = "";

  if (playerChoice === computerChoice) {
    resultTitle = "It's a tie!";
    resultMessage = "We both chose the same... weird.";
    ties++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    resultTitle = "You win!";
    resultMessage = "Okay fine... that was a good move.";
    wins++;
  } else {
    resultTitle = "Computer wins!";
    resultMessage = "Too easy. I’m better at this 😎";
    losses++;
  }

  document.getElementById("result-text").innerHTML =
    `You chose <strong>${playerChoice}</strong> - Computer chose <strong>${computerChoice}</strong><br>
     <strong>${resultTitle}</strong><br>
     ${resultMessage}`;

  updateScore();
}

function updateScore() {
  document.getElementById("score").textContent =
    `Wins: ${wins} | Losses: ${losses} | Ties: ${ties}`;
}

function resetScore() {
  wins = 0;
  losses = 0;
  ties = 0;

  document.getElementById("result-text").textContent = "Make your move!";
  updateScore();
}
