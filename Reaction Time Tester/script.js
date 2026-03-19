const gameArea = document.getElementById("game-area");
const startBtn = document.getElementById("start-btn");
const message = document.getElementById("message");
const result = document.getElementById("result");

let startTime;
let timeout;
let waitingForClick = false;

// Start Game
startBtn.addEventListener("click", () => {
    result.textContent = "";
    message.textContent = "Wait for green...";
    
    gameArea.classList.remove("ready", "too-early");
    gameArea.classList.add("waiting");

    waitingForClick = false;

    let delay = Math.random() * 3000 + 2000; // 2–5 sec

    timeout = setTimeout(() => {
        gameArea.classList.remove("waiting");
        gameArea.classList.add("ready");

        message.textContent = "CLICK NOW!";
        startTime = Date.now();
        waitingForClick = true;
    }, delay);
});

// Game Area Click
gameArea.addEventListener("click", () => {

    // Clicked too early
    if (!waitingForClick) {
        clearTimeout(timeout);
        gameArea.classList.remove("waiting");
        gameArea.classList.add("too-early");

        message.textContent = "Too Soon!";
        result.textContent = "Wait for green next time 😅";
        return;
    }

    // Valid click
    let reactionTime = Date.now() - startTime;

    gameArea.classList.remove("ready");
    gameArea.classList.add("waiting");

    message.textContent = "Click Start Again";
    result.textContent = `Your reaction time: ${reactionTime} ms`;

    waitingForClick = false;
});