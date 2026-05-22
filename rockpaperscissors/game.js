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
    resultMessage = "Great minds think alike... unfortunatley.";
    ties++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    resultTitle = "You win!";
    resultMessage = "Okay, that was a smart move. I’ll give you that.";
    wins++;
  } else {
    resultTitle = "Computer wins!";
    resultMessage = "Too easy. I expected more from you.";
    losses++;
  }

  document.getElementById("result-text").innerHTML =
    `You chose ${playerChoice} - Computer chose ${computerChoice}<br>
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
