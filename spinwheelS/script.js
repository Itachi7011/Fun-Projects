const canvas = document.getElementById("wheelCanvas");
const ctx = canvas.getContext("2d");
const segments = [
  "Hug 🤗",
  "Kiss 💋",
  "Call 📞",
  "Compliment 🥰",
  "Surprise 🎁",
  "Date 🍽️",
];
const colors = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#8AFF33",
  "#FF33E3",
  "#33FFF0",
];
const spinBtn = document.getElementById("spinBtn");
let startAngle = 0;

function drawWheel() {
  const anglePerSegment = (2 * Math.PI) / segments.length;
  for (let i = 0; i < segments.length; i++) {
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.arc(
      200,
      200,
      200,
      startAngle + i * anglePerSegment,
      startAngle + (i + 1) * anglePerSegment,
    );
    ctx.fillStyle = colors[i];
    ctx.fill();
    ctx.save();
    ctx.translate(200, 200);
    ctx.rotate(startAngle + i * anglePerSegment + anglePerSegment / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText(segments[i], 190, 5);
    ctx.restore();
  }
}
drawWheel();

spinBtn.onclick = () => {
  let spins = Math.random() * 5 + 5;
  let current = 0;
  const interval = setInterval(() => {
    startAngle += 0.1;
    drawWheel();
    current += 0.1;
    if (current > spins) {
      clearInterval(interval);
      alert(
        "Result: " +
          segments[
            Math.floor(
              (segments.length -
                (startAngle / (2 * Math.PI)) * segments.length) %
                segments.length,
            )
          ],
      );
    }
  }, 30);
};
