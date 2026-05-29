let wins = 0;
let losses = 0;
let ties = 0;

let currentStreak = 0;
let bestStreak = 0;

let difficulty = "easy";

let memory = {
  rock: 0,
  paper: 0,
  scissors: 0
};

/* ================= NAVIGATION ================= */

function setScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function showLevels() {
  setScreen("level-screen");
}

function goIntro() {
  setScreen("intro-screen");
}

function startGame(level) {
  difficulty = level;
  resetScore();
  setScreen("game-screen");
}

/* ================= AI ================= */

function getAIChoice() {
  const moves = ["rock", "paper", "scissors"];

  // EASY = random
  if (difficulty === "easy") {
    return moves[Math.floor(Math.random() * 3)];
  }

  // MEDIUM = half random
  if (difficulty === "medium" && Math.random() < 0.5) {
    return moves[Math.floor(Math.random() * 3)];
  }

  // HARD = learning AI
  let rockScore = memory.rock + Math.random();
  let paperScore = memory.paper + Math.random();
  let scissorsScore = memory.scissors + Math.random();

  let predicted = "rock";

  if (paperScore > rockScore && paperScore >= scissorsScore) {
    predicted = "paper";
  } else if (scissorsScore > rockScore && scissorsScore > paperScore) {
    predicted = "scissors";
  }

  if (predicted === "rock") return "paper";
  if (predicted === "paper") return "scissors";
  return "rock";
}

/* ================= GAME ================= */

function playGame(playerChoice) {

  memory[playerChoice]++;

  const computerChoice = getAIChoice();

  const images = {
    rock: "rockpaperscissors/rock.png",
    paper: "rockpaperscissors/paper.png",
    scissors: "rockpaperscissors/scissors.png"
  };

  document.getElementById("player-img").src = images[playerChoice];
  document.getElementById("computer-img").src = images[computerChoice];

  let result = "";

  if (playerChoice === computerChoice) {
    result = "Tie!";
    ties++;
    currentStreak = 0;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You Win!";
    wins++;
    currentStreak++;

    if (currentStreak > bestStreak) {
      bestStreak = currentStreak;
    }
  } else {
    result = "Computer Wins!";
    losses++;
    currentStreak = 0;
  }

  document.getElementById("result-text").innerHTML =
    `<strong>${result}</strong>`;

  updateUI();
}

/* ================= UI ================= */

function updateUI() {
  document.getElementById("score").textContent =
    `Wins: ${wins} | Losses: ${losses} | Ties: ${ties}`;

  document.getElementById("streak").textContent =
    `🔥 Current Streak: ${currentStreak}`;

  document.getElementById("best-streak").textContent =
    `🏆 Best Streak: ${bestStreak}`;
}

/* ================= RESET ================= */

function resetScore() {
  wins = 0;
  losses = 0;
  ties = 0;
  currentStreak = 0;
  bestStreak = 0;

  memory = { rock: 0, paper: 0, scissors: 0 };

  updateUI();
}
