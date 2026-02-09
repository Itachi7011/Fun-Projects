/* INIT */
document.documentElement.style.setProperty('--primary', HEARTSYNC_CONFIG.primaryColor);
document.documentElement.style.setProperty('--secondary', HEARTSYNC_CONFIG.secondaryColor);
document.getElementById("hs-brand-name").textContent = HEARTSYNC_CONFIG.brandName;

function nextStep(step) {
    document.querySelectorAll(".hs-step").forEach(s => s.classList.remove("active"));
    document.getElementById(`step-${step}`).classList.add("active");

    if (step === 3) {
        setTimeout(showResult, 2000);
    }
}

function showResult() {
    const base = 72;
    const randomBoost = Math.floor(Math.random() * 25);
    const percentage = base + randomBoost;

    const type = HEARTSYNC_CONFIG.relationshipTypes[
        Math.floor(Math.random() * HEARTSYNC_CONFIG.relationshipTypes.length)
    ];

    const message = HEARTSYNC_CONFIG.resultMessages[
        Math.floor(Math.random() * HEARTSYNC_CONFIG.resultMessages.length)
    ];

    document.getElementById("hs-percentage").textContent = `${percentage}% Match ❤️`;
    document.getElementById("hs-type").textContent = type;
    document.getElementById("hs-message").textContent = message;

    nextStep(4);
}
