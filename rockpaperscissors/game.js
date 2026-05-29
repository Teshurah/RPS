let wins = 0;
let losses = 0;
let ties = 0;

let currentStreak = 0;
let bestStreak = 0;

// AI memory
let memory = {
  rock: 0,
  paper: 0,
  scissors: 0
};

function getAIChoice() {
  // find player's most used move
  let mostUsed = "rock";

  if (memory.paper > memory.rock && memory.paper > memory.scissors) {
    mostUsed = "paper";
  } else if (memory.scissors > memory.rock && memory.scissors > memory.paper) {
    mostUsed = "scissors";
  }

  // AI counters player tendency
  if (mostUsed === "rock") return "paper";
  if (mostUsed === "paper") return "scissors";
  return "rock";
}

function playGame(playerChoice) {

  // track player behavior
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
  } 
  else if (
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
  } 
  else {
    result = "Computer Wins!";
    losses++;
    currentStreak = 0;
  }

  document.getElementById("result-text").innerHTML = result;

  updateUI();
}

function updateUI() {
  document.getElementById("score").textContent =
    `Wins: ${wins} | Losses: ${losses} | Ties: ${ties}`;

  document.getElementById("streak").textContent =
    `🔥 Current Streak: ${currentStreak}`;

  document.getElementById("best-streak").textContent =
    `🏆 Best Streak: ${bestStreak}`;
}

function resetScore() {
  wins = 0;
  losses = 0;
  ties = 0;
  currentStreak = 0;

  document.getElementById("result-text").textContent = "Make your move!";
  updateUI();
}
