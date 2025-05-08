const mazeElement = document.getElementById("maze");
const message = document.getElementById("message");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const gameSection = document.getElementById("game");
const emojiButtons = document.querySelectorAll(".emoji-button");
const emojiSelection = document.getElementById("emoji-selection");
const emojiContainer = document.getElementById("emoji-container");
const emojiList = ["😀", "😂", "😍", "😎", "😢", "😡", "🤔", "😱", "🤗", "😊"];


const maze = [
  [0,0,0,1,0,0,0,0,0,0],
  [1,1,0,1,0,1,1,1,1,0],
  [0,0,0,0,0,0,0,0,1,0],
  [0,1,1,1,1,1,1,0,1,0],
  [0,1,0,0,0,0,1,0,1,0],
  [0,1,0,1,1,0,1,0,1,0],
  [0,1,0,1,0,0,1,0,1,0],
  [0,0,0,1,0,1,1,0,0,0],
  [1,1,0,0,0,0,0,1,1,0],
  [0,0,0,1,1,1,0,0,0,0],
    [0,1,0,0,0,1,1,1,1,1],
    [0,0,0,1,0,0,1,0,0,0]
];

const exitPos = { x: 9, y: 9 };
let playerPos = { x: 0, y: 0 };

function drawMaze() {
  mazeElement.innerHTML = "";
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      const cell = document.createElement("div");
        cell.style.width = "50px";
        cell.style.height = "50px";
        cell.style.border = "1px solid black";
        cell.style.boxSizing = "border-box";
        cell.style.display = "inline-block";
        cell.style.position = "relative";
      cell.classList.add("cell");

      if (maze[y][x] === 1) cell.classList.add("wall");
      if (x === exitPos.x && y === exitPos.y) {
        cell.classList.add("exit");

        cell.textContent = "🚪";

      }
      if (x === playerPos.x && y === playerPos.y) {
        cell.classList.add("player");
        cell.textContent = selectedEmoji;

      }

      mazeElement.appendChild(cell);
    }
  }
}

function movePlayer(dx, dy) {
  const newX = playerPos.x + dx;
  const newY = playerPos.y + dy;
    // Проверяем, что игрок не выходит за границы и не сталкивается со стеной

  if (
    newX >= 0 && newX < 10 &&
    newY >= 0 && newY < 10 &&
    maze[newY][newX] === 0
  ) {
    playerPos = { x: newX, y: newY };
    drawMaze();
    checkWin();
    message.textContent = "Используй стрелки для движения!";
  }
}

function checkWin() {
  if (playerPos.x === exitPos.x && playerPos.y === exitPos.y) {
    message.textContent = "🎉 Победа! Ты выбрался!";
    document.removeEventListener("keydown", handleKey);
    setTimeout(() => {
      message.textContent = "Выбери смайлик для новой игры!";
      gameSection.style.display = "none";
      emojiSelection.style.display = "block";
      playerPos = { x: 0, y: 0 };
    }, 2000);
    emojiButtons.forEach(button => {
      button.addEventListener("click", () => {
        selectedEmoji = button.textContent;
        emojiSelection.style.display = "none";
        gameSection.style.display = "block";
        drawMaze();
        document.addEventListener("keydown", handleKey);
        message.textContent = "Используй стрелки для движения!";
      });
    });
    document.removeEventListener("keydown", handleKey);
    emojiButtons.forEach(button => {
      button.removeEventListener("click", () => {
        selectedEmoji = button.textContent;
        emojiSelection.style.display = "none";
        gameSection.style.display = "block";
        drawMaze();
        document.addEventListener("keydown", handleKey);
        message.textContent = "Используй стрелки для движения!";
      });
    });
  }
}

function handleKey(e) {
  switch (e.key) {
    case "ArrowUp": movePlayer(0, -1); break;
    case "ArrowDown": movePlayer(0, 1); break;
    case "ArrowLeft": movePlayer(-1, 0); break;
    case "ArrowRight": movePlayer(1, 0); break;
    default: break;
  }
}

// Обработка выбора смайлика
emojiButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedEmoji = button.textContent;
    emojiSelection.style.display = "none";
    gameSection.style.display = "block";
    drawMaze();
    document.addEventListener("keydown", handleKey);
    message.textContent = "Используй стрелки для движения!";

  });
});
