/* INIT CONFIG */
document.documentElement.style.setProperty('--primary', HEARTSYNC_CONFIG.primaryColor);
document.documentElement.style.setProperty('--secondary', HEARTSYNC_CONFIG.secondaryColor);
document.getElementById("hs-brand-name").textContent = HEARTSYNC_CONFIG.brandName;

/* MUSIC */
const music = document.getElementById("hs-music");
const musicBtn = document.getElementById("hs-music-toggle");

if (!HEARTSYNC_CONFIG.showMusic) musicBtn.style.display = "none";

musicBtn.onclick = () => {
    music.paused ? music.play() : music.pause();
};

/* NAVIGATION BETWEEN STEPS */
function nextStep(step) {
    document.querySelectorAll(".hs-step").forEach(s => s.classList.remove("active"));
    document.getElementById(`step-${step}`).classList.add("active");

    if (step === 3) {
        setTimeout(showResult, 1800);
    }
}

/* SHOW RESULT */
function showResult() {
    const percentage = 72 + Math.floor(Math.random() * 25);
    const type = randomFrom(HEARTSYNC_CONFIG.relationshipTypes);
    const message = randomFrom(HEARTSYNC_CONFIG.resultMessages);

    document.getElementById("hs-percentage").textContent = `${percentage}% Match ❤️`;
    document.getElementById("hs-type").textContent = type;
    document.getElementById("hs-message").textContent = message;

    if (HEARTSYNC_CONFIG.showPhoto) {
        document.getElementById("hs-photo").style.display = "block";
    }

    nextStep(4);
}

/* UTILITY */
function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
