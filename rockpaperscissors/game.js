let playerScore = localStorage.getItem("playerScore") || 0;
let computerScore = localStorage.getItem("computerScore") || 0;
let draws = localStorage.getItem("draws") || 0;

let lastPlayerMove = null;

updateScore();

function computerMove() {
  const difficulty = document.getElementById("difficulty").value;
  const moves = ["rock", "paper", "scissors"];

  if (difficulty === "easy") {
    return moves[Math.floor(Math.random() * 3)];
  }

  if (difficulty === "medium") {
    if (Math.random() < 0.5 && lastPlayerMove) {
      if (lastPlayerMove === "rock") return "paper";
      if (lastPlayerMove === "paper") return "scissors";
      if (lastPlayerMove === "scissors") return "rock";
    }
    return moves[Math.floor(Math.random() * 3)];
  }

  if (lastPlayerMove === "rock") return "paper";
  if (lastPlayerMove === "paper") return "scissors";
  if (lastPlayerMove === "scissors") return "rock";

  return moves[Math.floor(Math.random() * 3)];
}

function play(playerChoice) {
  const compChoice = computerMove();
  lastPlayerMove = playerChoice;

  let resultText = "";
  let resultClass = "";

  if (playerChoice === compChoice) {
    resultText = `Draw! Both chose ${playerChoice}`;
    draws++;
    resultClass = "draw";
  } 
  else if (
    (playerChoice === "rock" && compChoice === "scissors") ||
    (playerChoice === "paper" && compChoice === "rock") ||
    (playerChoice === "scissors" && compChoice === "paper")
  ) {
    resultText = `You Win! ${playerChoice} beats ${compChoice}`;
    playerScore++;
    resultClass = "win";
  } 
  else {
    resultText = `You Lose! ${compChoice} beats ${playerChoice}`;
    computerScore++;
    resultClass = "lose";
  }

  document.getElementById("result").innerText = resultText;
  document.getElementById("result").className = "result " + resultClass;

  addHistory(resultText);
  saveData();
  updateScore();
}

function updateScore() {
  document.getElementById("playerScore").innerText = playerScore;
  document.getElementById("computerScore").innerText = computerScore;
  document.getElementById("draws").innerText = draws;
}

function saveData() {
  localStorage.setItem("playerScore", playerScore);
  localStorage.setItem("computerScore", computerScore);
  localStorage.setItem("draws", draws);
}

function addHistory(text) {
  const history = document.getElementById("history");
  const div = document.createElement("div");
  div.innerText = text;
  history.prepend(div);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  draws = 0;

  localStorage.clear();
  updateScore();

  document.getElementById("history").innerHTML = "";
  document.getElementById("result").innerText = "Game reset! Make your move!";
  document.getElementById("result").className = "result";
}
