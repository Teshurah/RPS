const choices = ["rock", "paper", "scissors"];

document.getElementById("rock").onclick = () => play("rock");
document.getElementById("paper").onclick = () => play("paper");
document.getElementById("scissors").onclick = () => play("scissors");

function play(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById("user-choice").textContent = `You chose: ${userChoice}`;
  document.getElementById("computer-choice").textContent = `Computer chose: ${computerChoice}`;

  let winner = "It's a draw!";
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    winner = "You win!";
  } else if (userChoice !== computerChoice) {
    winner = "Computer wins!";
  }

  document.getElementById("winner").textContent = `Winner: ${winner}`;
}
