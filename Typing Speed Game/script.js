const textDisplay = document.getElementById("text-display");
const input = document.getElementById("input");
const modeSelect = document.getElementById("mode");

const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");

let time = 60;
let timerStarted = false;
let timer;

let fullText = "";
let mistakes = 0;

// CHARACTER SETS
const words = ["code", "speed", "keyboard", "practice", "typing", "developer", "focus", "skill"];
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>/?";

// GENERATE TEXT BASED ON MODE
function generateText(mode) {
    let text = "";

    for (let i = 0; i < 200; i++) {
        if (mode === "words") {
            text += words[Math.floor(Math.random() * words.length)] + " ";
        } 
        else if (mode === "numbers") {
            text += numbers[Math.floor(Math.random() * numbers.length)];
        } 
        else if (mode === "symbols") {
            text += symbols[Math.floor(Math.random() * symbols.length)];
        } 
        else if (mode === "alphanumeric") {
            let mix = numbers + "abcdefghijklmnopqrstuvwxyz";
            text += mix[Math.floor(Math.random() * mix.length)];
        } 
        else {
            let mix = numbers + symbols + "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            text += mix[Math.floor(Math.random() * mix.length)];
        }
    }

    return text;
}

// RENDER TEXT
function renderText() {
    textDisplay.innerHTML = "";
    fullText.split("").forEach(char => {
        const span = document.createElement("span");
        span.innerText = char;
        textDisplay.appendChild(span);
    });
}

// INIT LOAD
function loadNewText() {
    fullText = generateText(modeSelect.value);
    renderText();
}

// START TIMER ON FIRST KEY
input.addEventListener("input", () => {
    if (!timerStarted) {
        timerStarted = true;
        timer = setInterval(updateTime, 1000);
    }

    handleTyping();
});

// TIMER
function updateTime() {
    if (time > 0) {
        time--;
        timeEl.innerText = time;
    } else {
        clearInterval(timer);
        input.disabled = true;
    }
}

// TYPING LOGIC (FLOWING LINES)
function handleTyping() {
    const typed = input.value;
    const chars = textDisplay.querySelectorAll("span");

    mistakes = 0;

    chars.forEach((span, index) => {
        const typedChar = typed[index];

        if (typedChar == null) {
            span.classList.remove("correct", "incorrect");
        } 
        else if (typedChar === span.innerText) {
            span.classList.add("correct");
            span.classList.remove("incorrect");
        } 
        else {
            span.classList.add("incorrect");
            span.classList.remove("correct");
            mistakes++;
        }
    });

    // ✅ REAL LINE DETECTION
    const currentIndex = typed.length;
    const currentChar = chars[currentIndex];

    if (currentChar) {
        const currentTop = currentChar.offsetTop;

        // shift only when user actually moves to next line visually
        textDisplay.style.transform = `translateY(-${currentTop}px)`;
    }

    updateStats(typed.length);
}
// STATS
function updateStats(totalTyped) {
    let timeSpent = 60 - time;

    let wpm = Math.round(((totalTyped - mistakes) / 5) / (timeSpent / 60));
    wpm = (wpm && wpm !== Infinity) ? wpm : 0;

    let accuracy = Math.round(((totalTyped - mistakes) / totalTyped) * 100);
    accuracy = isNaN(accuracy) ? 100 : accuracy;

    wpmEl.innerText = wpm;
    accuracyEl.innerText = accuracy;
}

// MODE CHANGE
modeSelect.addEventListener("change", () => {
    input.value = "";
    textDisplay.style.transform = "translateY(0)";
    timerStarted = false;
    time = 60;
    timeEl.innerText = time;
    loadNewText();
});

// INITIAL LOAD
loadNewText();