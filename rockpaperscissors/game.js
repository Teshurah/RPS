function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const icons = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
  };

  document.getElementById("player-choice").textContent = icons[playerChoice];
  document.getElementById("computer-choice").textContent = icons[computerChoice];

  let resultTitle = "";
  let resultMessage = "";

  if (playerChoice === computerChoice) {
    resultTitle = "It's a tie!";
    resultMessage = "Evenly matched!";
    ties++;
  } 
  else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    resultTitle = "You win!";
    resultMessage = "Nice move!";
    wins++;
  } 
  else {
    resultTitle = "Computer wins!";
    resultMessage = "Too easy 😎";
    losses++;
  }

  document.getElementById("result-text").innerHTML =
    `<strong>${resultTitle}</strong><br>${resultMessage}`;

  updateScore();
}
