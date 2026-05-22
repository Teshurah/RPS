let wins = 0;
let losses = 0;
let ties = 0;

function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie! Great minds think alike... unfortunately.";
    ties++;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win! Okay fine, that was actually a good move.";
    wins++;
  } else {
    result = "Computer wins! Too easy. I expected more from you.";
    losses++;
  }

  document.getElementById("result-text").textContent =
    `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;

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
