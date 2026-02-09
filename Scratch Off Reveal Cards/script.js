const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth * 0.8;
canvas.height = canvas.width * 0.6;

ctx.fillStyle = "#aaa";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Hidden message
const message = "You are my ❤️!";
ctx.font = "40px Arial";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText(message, canvas.width / 2, canvas.height / 2);

let scratching = false;
canvas.addEventListener("pointerdown", () => (scratching = true));
canvas.addEventListener("pointerup", () => (scratching = false));
canvas.addEventListener("pointermove", (e) => {
  if (!scratching) return;
  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(e.offsetX, e.offsetY, 30, 0, 2 * Math.PI);
  ctx.fill();
  ctx.globalCompositeOperation = "source-over";
});
