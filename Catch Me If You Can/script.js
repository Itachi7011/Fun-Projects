/* MUSIC TOGGLE */
const music = document.getElementById("ulv-music");
const musicBtn = document.getElementById("ulv-music-toggle");

if (musicBtn) {
    musicBtn.onclick = () => {
        music.paused ? music.play() : music.pause();
    };
}

/* RUNAWAY + TEASE */
const noBtn = document.getElementById("ulv-no-btn");
const teaseText = document.getElementById("ulv-tease-text");
const zone = document.querySelector(".ulv-button-zone");

const teaseMessages = [
    "Nice try 😜",
    "Almost 😏",
    "You know the answer 💖"
];

if (noBtn) {
    noBtn.onmouseenter = () => {
        teaseText.textContent =
            teaseMessages[Math.floor(Math.random() * teaseMessages.length)];

        const x = Math.random() * (zone.clientWidth - noBtn.offsetWidth);
        const y = Math.random() * (zone.clientHeight - noBtn.offsetHeight);

        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    };
}

/* YES → CONFETTI → LOCK */
const yesBtn = document.getElementById("ulv-yes-btn");
if (yesBtn) {
    yesBtn.onclick = () => {
        document.body.innerHTML += "💖💖💖";
        setTimeout(() => location.href = "lock.html", 800);
    };
}

/* LOCK SCREEN */
const unlockBtn = document.getElementById("ulv-unlock-btn");
if (unlockBtn) {
    unlockBtn.onclick = () => {
        const input = document.getElementById("ulv-secret-input").value;
        if (input.toLowerCase() === "love") {
            location.href = "surprise.html";
        } else {
            document.getElementById("ulv-lock-msg").textContent =
                "Hmm… try again 💕";
        }
    };
}

/* SINCE WE MET COUNTER */
const counter = document.getElementById("ulv-counter");
if (counter) {
    const startDate = new Date("2024-01-01");
    setInterval(() => {
        const diff = Date.now() - startDate;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        counter.textContent = `Loving you for ${days} days 💖`;
    }, 1000);
}
